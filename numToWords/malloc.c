#include <stdlib.h> /* for realloc() */
#include <string.h> /* for memcpy() */
#include <unistd.h> /* for read() */
int main(void)
{
	int n_read;
	int buff_size;
	int read_count;
	int f1;

	n_read = read(f1, read_buffer, buff_size - 1);
read_count = n_read;
int new_size = buff_size;
while (read_count == (buff_size - 1))
{

        new_size *= 2;
        read_buffer = realloc(read_buffer, new_size);
        n_read = read(f1, read_buffer[read_count], buff_size - 1);
        read_count += n_read;
}
	return (0);
}