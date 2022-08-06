#include <stdio.h>
#include<stdlib.h>
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

void ft_three_digits(int val)
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
  	hundreds[10]="hundred and";

	div = (val / 10);
	rem = val % 10;
	if (val < 100)
	{
		if (val <= 20)
			printf("%s", tens[val]);
		else
			printf("%s %s", hundreds[div], tens[rem]);
	}
else
{
	div = val / 100;
	rem = val % 100;
	div_2 = rem /10;
	rem_2 = rem % 10;
	if (rem <= 20)
		printf("%s hundred and %s", tens[div], tens[rem]);
	else
		printf("%s hundred and %s %s", tens[div], hundreds[div_2], tens[rem_2]);
}

	
}

// capitalize func

void convert_to_num(char *val)
{
	int num;
	num =  atoi(val);
	
	ft_three_digits(num);

}

int main(int argc, char *argv[])
{
	if (argc>1)
		convert_to_num(argv[1]);
	return (0);
}