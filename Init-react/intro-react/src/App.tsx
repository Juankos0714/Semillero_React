import { useState, useEffect } from 'react'
import './App.css'

interface Book {
  id: number;
  libro: string;
  titulo_original: string;
  fecha_de_lanzamiento: string;
  autora: string;
  descripcion: string;
  cantidad_disponible?: number;
  precio?: number;
}
const getBooks = async () => {
  const books = await fetch(url)
  const data = await books.json()
  
  return data;
}

const Card = (prop: Book & { portadaUrl?: string }) => (
  <div>
    {prop.portadaUrl && <img src={prop.portadaUrl} alt={prop.libro} />}
    <h2>{prop.libro}</h2>
    <h3>{prop.titulo_original}</h3>
    <p>{prop.fecha_de_lanzamiento}</p>
    <p>{prop.autora}</p>
    <p>{prop.descripcion}</p>
    <p>{prop.cantidad_disponible}</p>
    <p>{prop.precio}</p>
  </div>
)
  

const url = 'https://harry-potter-api.onrender.com/libros';

interface Portada { id: number; url: string };
const portadas: { libros: Portada[] } = {
  libros: [
    {
      id: 1,
      url: "https://res.cloudinary.com/dm4h2avio/image/upload/v1762614482/download_qonidj.jpg"
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dm4h2avio/image/upload/v1762614513/download_v4o9lt.jpg"
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/dm4h2avio/image/upload/v1762614552/download_ronvxh.jpg"
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/dm4h2avio/image/upload/v1762614555/download_hjih0v.jpg"
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/dm4h2avio/image/upload/v1762614569/download_n4w1xq.jpg"
    }
  ]
};
function App() {
  const [data, setData] = useState<Book[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const books = await getBooks();
      const newBooks: (Book & { portadaUrl?: string })[] = [];
      
      books.forEach((book: Book) => { 
        const portada = portadas.libros.find((p) => p.id === book.id);
        if (portada) {
          newBooks.push({ ...book, portadaUrl: portada.url, cantidad_disponible: Math.floor(Math.random()*20),precio: Math.floor(Math.random()*(50000 - 10000)+10000) });
        } else {
          newBooks.push(book);
        }  
      });
      setData(newBooks);
    };

    fetchData();
  },[]);

  data.forEach((book)=> console.log(book))

  return (
    <div className="App">
      {data.map((book) => (
        <Card key={book.id} {...book} />
      ))}
    </div>
  )
}

export default App


  