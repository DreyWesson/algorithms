#include <stdio.h>

int	ft_atoi(char *str);
char *ft_search_dict(char *words[], int length, char *dest, int ln);
char ** loadfile(char * filename, int *len);
int ft_len(char *str)
{
	int i;

	i = 0;
	while(str[i] != '\0')
	{
		i++;
	}
	return (i);
}

void ft_three_digits(int val, char **words, int length)
{
	int div;
	int rem;
	int rem_2;
	int div_2;

	const char *tens[21];
	const char *hundreds[21];
	tens[0]="zero";
  	tens[1]="one";
  	tens[2]="two";
  	tens[3]="three";
  	tens[4]="four";
  	tens[5]="five";
  	tens[6]="six";
  	tens[7]="seven";
  	tens[8]="eight";
  	tens[9]="nine";
  	tens[10]="ten";
  	tens[11]="eleven";
  	tens[12]="twelve";
  	tens[13]="thirteen";
  	tens[14]="fourteen";
  	tens[15]="fifteen";
  	tens[16]="sixteen";
  	tens[17]="seventeen";
  	tens[18]="eighteen";
  	tens[19]="nineteen";
  	tens[20]="twenty";

	hundreds[0]="zero";
  	hundreds[1]="ten";
  	hundreds[2]="twenty";
  	hundreds[3]="thirty";
  	hundreds[4]="forty";
  	hundreds[5]="fifty";
  	hundreds[6]="sixty";
  	hundreds[7]="seventy";
  	hundreds[8]="eighty";
  	hundreds[9]="ninety";
  	hundreds[10]="hundred";

	char dest[15];
	// int length = 0;
	// char **words = loadfile(val_2, &length);
	// Display first 100 lines
	
	printf("%s\n", ft_search_dict(words, length, dest, 11));

	div = (val / 10);
	rem = val % 10;
	if (val < 100)
	{
		if (val == 0)
		{}
		else if (val <= 20)
			printf("%s", ft_search_dict(words, length, dest, val));
		else
			printf("%s %s", ft_search_dict(words, length, dest, (div + 18)), ft_search_dict(words, length, dest, rem));
	}
	else
	{
		div = val / 100;
		rem = val % 100;
		div_2 = rem /10;
		rem_2 = rem % 10;
		if (rem <= 20 && rem > 0)
			printf("%s hundred and %s", tens[div], tens[rem]);
		else if (rem <= 20 && rem == 0 && div != 0)
			printf("%s hundred", tens[div]);
		else
			printf("%s hundred and %s %s", tens[div], hundreds[div_2], tens[rem_2]);
	}

	
}

// capitalize func
// last 3 digits needs grammatical restructuring
// change printf to write

void convert_to_num(char *val, char *val_2)
{
	int num;
	int len;
	char tmp[3];
	int every[50];
	int every_counter;
	int tmp_i;
	const char *commas[14];

		//  load file into data stucture
	// char dest[15];
	int length = 0;
	char **words = loadfile(val_2, &length);
	// Display first 100 lines
	

	commas[0] = "zero";
	commas[1] = "hundred";
	commas[2]="thousand"; 
	commas[3]="million"; 
	commas[4]="billion"; 
	commas[5]="trillion";
	commas[6]="quadrillion";
	commas[7]="quintillion";
	commas[8]="sextillion";
	commas[9]="septillion";
	commas[10]="octillion";
	commas[11]="nonillion";
	commas[12]="decillion";
	commas[13]="undecillion";
	tmp_i = 2;
	every_counter = 0;
	len = ft_len(val);
	while(len >= 0)
	{
		if (tmp_i >= 0)
			tmp[tmp_i] = val[len-1];

		if (tmp_i == 0)
		{
			num =  ft_atoi(tmp);
			every[every_counter] = num;
			tmp_i = 3;
			every_counter++;
		}
		tmp_i--;
		len--;
	}
	while(every_counter > 0)
	{
		ft_three_digits(every[every_counter-1], words, length);
		if (every_counter > 1)
			printf(" %s, ", commas[every_counter]);
		every_counter--;
	}
}

// int main(int argc, char *argv[])
// {
// 	if (argc>1)
		// convert_to_num(argv[1]);
// 	return (0);
// }

int main(int argc, char *argv[])
{
	if (argc == 1)
		return (0);
	convert_to_num(argv[1], argv[2]);
	return (0);
}