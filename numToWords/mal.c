#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int    ft_strlen(char *str);
char	*ft_strcpy(char *dest, char *src);
char *ft_fgets(char my_string[], int bytes, FILE *fp);
char *ft_search_dict(char *words[], int length, char *dest, int ln);
char ** loadfile(char * filename, int *len);

const int STEPSIZE = 100;
// int main(int argc, char *argv[])
// {
// 	if (argc == 1)
// 		return (0);

// 	//  load file into data stucture
// 	int length = 0;
// 	char **words = loadfile(argv[1], &length);
// 	char dest[15];
// 	// Display first 100 lines
	
// 	printf("%s", ft_search_dict(words, length, dest));

// }

char ** loadfile(char *filename, int *len)
{
	FILE *file = fopen(filename, "r");
	if (!file)
		return (0);
	int arrlen = STEPSIZE;
	char **lines = (char **)malloc(arrlen * sizeof(char *)); // preallocate chunk of memory to fill our array

	// get exact num of char on a line + '\0
	char buf[1000]; //assume the max possible char/line is 1000
	int i = 0;
	while(ft_fgets(buf, 1000, file))
	{
		// Check if array is full? Extend it
		if (i == arrlen)
		{
			arrlen += STEPSIZE; // the array grows by 100 every time allocated mem is reached
			char** newlines = malloc(arrlen * sizeof(char *));
			if (!newlines)
				return (0);
			// if realloc is successful return d new address
			free(lines);
			lines = newlines;
			free(newlines);
		}

		if (buf[ft_strlen(buf) - 1] == '\n') // Trim off \n char
			buf[ft_strlen(buf) - 1] = '\0';
		int str_length =ft_strlen(buf); // Get length of buf
		char *str = (char *)malloc((str_length + 1) * sizeof(char)); // Allocate space for the string
		ft_strcpy(str, buf); // Copy string from buf to str
		lines[i] = str;//Attach str to data structure
		i++;
	}
	*len = i; // Set length of arr of char *s
	// printf("%i\n", i);
	return (lines);
}

int    ft_strlen(char *str)
{
    int    num_count;

    num_count = 0;
    while (str[num_count] != '\0')
        num_count++;
    return (num_count);
}

char	*ft_strcpy(char *dest, char *src)
{
	int	i;

	i = 0;
	while (src[i] != '\0')
	{
		dest[i] = src[i];
		i++;
	}
	dest[i] = '\0';
	return (dest);
}

char *ft_fgets(char my_string[], int bytes, FILE *fp) 
{
    int c, i = 0;

    if (bytes <= 0)
        return my_string;

    while (i < bytes - 1 && (c = getc(fp)) != EOF) 
    {
        my_string[i++] = c;
        if (c == '\n')
            break;
    }
    my_string[i] = '\0'; //adding NUL character at the end

    if (i > 0) {
        return my_string;
    } else {
        return NULL;  // no character read at end of file
    }
}

char *ft_search_dict(char *words[], int length, char *dest, int ln)
{
	int i = 0;
	int k =0;
	int l = 0;
	int start = 0;
	while(i < length)
	{
		if (i == ln)
		{
			while (words[i][k] != '\0')
			{
				if (start >= 1 !='\0')
				{
					dest[l] = words[i][k];
					l++;
				}
				if (words[i][k] == ' ')
					start = 1;
				k++;
			}
			dest[l] ='\0';
		}
		
		i++;
	}
	return (dest);
}