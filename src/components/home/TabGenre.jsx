import React from "react";
// Import komponen Tabs dari Ant Design
import { Tabs } from 'antd'; 

// --- 1. IMPOR GAMBAR & PEMETAAN VARIABEL ---
// Lakukan semua impor aset Anda seperti biasa.
import Comic1 from "../../assets/img/serial/image_manhwa1.jpg";
import Comic2 from "../../assets/img/serial/image_manhwa2.jpg";
import Comic3 from "../../assets/img/serial/image_manhwa3.jpg";
import Comic4 from "../../assets/img/serial/image_manhwa4.jpg";
import Comic5 from "../../assets/img/serial/image_manhwa5.jpg";
import Comic6 from "../../assets/img/serial/image_manhwa6.jpg";
import Comic7 from "../../assets/img/serial/image_manhwa7.jpeg";
import Comic8 from "../../assets/img/serial/image_manhwa8.jpeg";
import Comic9 from "../../assets/img/serial/image_manhwa9.jpg";
import Comic10 from "../../assets/img/serial/image_manhwa10.jpg";
import Comic11 from "../../assets/img/serial/image_manhwa11.jpeg";
import Comic12 from "../../assets/img/serial/image_manhwa12.jpg";
import Comic13 from "../../assets/img/serial/image_manhwa13.jpeg";
import Comic14 from "../../assets/img/serial/image_manhwa14.jpg";
import Comic15 from "../../assets/img/serial/image_manhwa15.jpg";
import Comic16 from "../../assets/img/serial/image_manhwa16.jpg";
import Comic17 from "../../assets/img/serial/image_manhwa17.jpg";
import Comic18 from "../../assets/img/serial/image_manhwa18.jpg";
import Comic19 from "../../assets/img/serial/image_manhwa19.jpg";
import Comic20 from "../../assets/img/serial/image_manhwa20.png";
import Comic21 from "../../assets/img/serial/image_manhwa21.png";
import Comic22 from "../../assets/img/serial/image_manhwa22.png";
import Comic23 from "../../assets/img/serial/image_manhwa23.png";
import Comic24 from "../../assets/img/serial/image_manhwa24.png";
import Comic25 from "../../assets/img/serial/image_manhwa25.jpg";
import Comic26 from "../../assets/img/serial/image_manhwa26.jpg";
import Comic27 from "../../assets/img/serial/image_manhwa27.jpg";

const comicImages = {
  Comic1, Comic2, Comic3, Comic4, Comic5, Comic6, Comic7, Comic8, Comic9, Comic10,
  Comic11, Comic12, Comic13, Comic14, Comic15, Comic16, Comic17, Comic18, Comic19,
  Comic25, Comic26, Comic27 , Comic20, Comic21, Comic22, Comic23, Comic24,
};

// DATA TAB 
const tabData = [
  {
    key: '1',
    label: 'Kingdom',
    images: [
     
      { url: Comic2, alt: 'Kingdom 1'}, 
      { url: Comic4, alt: 'Kingdom 2' },
      { url: Comic17, alt: 'Kingdom 3' },
      { url: Comic19, alt: 'Kingdom 4' },
      { url: Comic20, alt: 'Kingdom 5' },
      { url: Comic22, alt: 'Kingdom 6' },
      { url: Comic25, alt: 'Kingdom 7' },
      { url: Comic26, alt: 'Kingdom 8' },
      { url: Comic27, alt: 'Kingdom 9' },
    ],
  },
  {
    key: '2',
    label: 'Comedy',
    images: [
      { url: Comic15, alt: 'Komedi 15' },
      { url: Comic5, alt: 'Komedi 5' },
      { url: Comic18, alt: 'Komedi 18' },
      { url: Comic24, alt: 'Komedi 24' },
    ],
  },
  {
    key: '3',
    label: 'Thriller',
    images: [
      { url: Comic13, alt: 'Thriller 13' },
      { url: Comic16, alt: 'Thriller 16' },
      { url: Comic21, alt: 'Thriller 21' },
      { url: Comic23, alt: 'Thriller 23' },
    ],
  },
  {
    key: '4',
    label: 'Romance',
    images: [
      { url: Comic3, alt: 'Romance 3' },
      { url: Comic6, alt: 'Romance 6' },
      { url: Comic7, alt: 'Romance 7' },
      { url: Comic10, alt: 'Romance 10' },
      { url: Comic12, alt: 'Romance 12' },
    ],
  },
  {
    key: '5',
    label: 'Drama',
    images: [
      { url: Comic1, alt: 'Drama 2' },
      { url: Comic2, alt: 'Drama 2' },
      { url: Comic8, alt: 'Drama 8' },
      { url: Comic9, alt: 'Drama 9' },
      { url: Comic11, alt: 'Drama 11' },
      { url: Comic14, alt: 'Drama 14' },
    ],
  },
];

// --- Komponen Anak: Tampilan Gambar Horizontal ---
const HorizontalImageList = ({ images }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      overflowX: 'auto', 
      paddingBottom: 10, 
      gap: 20, 
      backgroundColor: '#f8f8f8', 
      padding: '10px 20px',
      borderRadius: 8,
      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.06)'
    }}>
      {images.map((img, index) => (
        <div key={index} style={{ 
          flexShrink: 0, 
          width: 180, 
          textAlign: 'center' 
        }}>
          <img 
            src={img.url} 
          style={{
    width: '100%',
    height: 250,
    objectFit: 'cover',
    borderRadius: 6,
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    display: 'block'
            }}
          />
          <p style={{ marginTop: 8, fontSize: '0.9em', color: '#555' }}>{img.alt}</p>
        </div>
      ))}
    </div>
  );
};


// --- Komponen Utama: Tabs & Galeri ---
const TabbedImageGallery = () => {
  
  const tabItems = tabData.map(tab => ({
    key: tab.key,
    label: tab.label,
    children: <HorizontalImageList images={tab.images} />,
  }));

  return (
 <div style={{ 
  width: '95%',  
  maxWidth: '1400px',
  margin: '20px auto',
  fontFamily: 'Arial, sans-serif'
}}>

      <h1 style={{ textAlign: 'center', marginBottom: 30, color: '#66c7ff' }}>
        Choose your favourite genre
      </h1>
      
      <Tabs
        defaultActiveKey="1"
        items={tabItems}
        type="card" 
        style={{ borderBottom: '2px solid #eee' }}
      />
      
      <p style={{ marginTop: 20, fontSize: '0.85em', color: '#888' }}>
       Scroll sideways to see all content
      </p>
    </div>
  );
};

export default TabbedImageGallery;