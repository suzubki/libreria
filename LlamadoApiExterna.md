 const url =
            "https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=AFE7TnH7IAAAVJLUAAKawbCHM0Ablb9S";

        const response = await axios.get(url);
        const data = response.data;
        const books = data.results.lists[0].books;

        const GENEROS = [
            "Aventuras",
            "Ciencia Ficcion",
            "Policiaca",
            "Terror y misterio",
            "Romantica",
            "Humor",
            "Poesia",
            "Mitologia",
            "Teatro",
            "Cuento",
        ];

        books.map(async (book) => {
            const mayoriaDeEdadRandom =
                Math.floor(Math.random() * 10) <= 5 ? true : false;
            const cantidadRandom = Math.floor(Math.random() * 100);
            const generoRandom =
                GENEROS[Math.floor(Math.random() * GENEROS.length)];

            await database("libros").insert({
                titulo: book.title,
                autor: book.author,
                genero: generoRandom,
                editorial: book.publisher,
                portada: book.book_image,
                isbn: book.primary_isbn10,
                mayoria_de_edad: mayoriaDeEdadRandom,
                libro_id: uuidv4(),
                cantidad: cantidadRandom,
            });
        });