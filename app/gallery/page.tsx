import Image from 'next/image';

const galleryImages = [
  {
    src: '/images/hero-car-lift.png',
    alt: 'Car on a lift',
    caption: 'Shop bay setup',
  },
  {
    src: '/images/brakes.jpeg',
    alt: 'Brake service in progress',
    caption: 'Brake service and inspection',
  },
  {
    src: '/images/lift.png',
    alt: 'Vehicle lift in the shop',
    caption: 'Professional shop equipment',
  },
];

export default function GalleryPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="section-header">
          <p className="section-eyebrow">Shop + work photos</p>
          <h1>Gallery</h1>
          <p>Browse photos from the shop and recent service work to see how Reliable Motorsports operates.</p>
        </div>

        <div className="gallery-grid gallery-full">
          {galleryImages.map((image) => (
            <div key={image.src} className="gallery-item gallery-large">
              <Image src={image.src} alt={image.alt} width={900} height={600} />
              <p className="gallery-caption">{image.caption}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
