/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   myAtoi.c                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: doduwole <doduwole@student.42wolfsburg.    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/09/08 13:38:23 by doduwole          #+#    #+#             */
/*   Updated: 2022/09/08 13:47:26 by doduwole         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */



int	my_atoi(char	*str)
{
	long	i;
	long	nbr;
	int	is_neg;
	int	is_pos;
	long	max;
	long	min;

	i = 0;
	nbr = 0;
	is_neg = 0;
	is_pos = 0;
	max = 2147483647;
	min = 2147483648;
	while (str[i] != '\0' && (!(str[i] >= '0' && str[i] <= '9')))
	{
		if ((is_pos > 0 || is_neg > 0) && !(str[i] >= '0' && str[i] <= '9'))
			return (0);
		if (str[i] == 45)
			is_neg += 1;
		else if (str[i] == 43)
			is_pos += 1;
		else if (str[i] == 32)
		{

		}
		else
			return (0);
		if (is_pos > 0 && is_neg > 0)
			return (0);
		i++;
	}
	while (str[i] != '\0' && (str[i] >= '0' && str[i] <= '9'))
	{
		nbr = (nbr * 10) + (str[i] - '0');
		if (nbr > max	&&	is_neg == 0)
			return (max);
		if (nbr > min && is_neg > 0)
			return (-min);
		i++;
	}
	if (is_neg > 0) 
		return (-nbr);
	return (nbr);
}