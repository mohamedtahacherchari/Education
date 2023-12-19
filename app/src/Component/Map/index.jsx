function Map() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.7730472944643!2d2.3974579!3d48.7784876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e673868da5cc47%3A0xfaa940a21354a12!2s111%20Rue%20Anselme%20Rondenay%2C%2094400%20Vitry-sur-Seine%2C%20France!5e0!3m2!1sen!2sus!4v1640787321014!5m2!1sen!2sus";

  return (
    <div className="bisylms-map">
      <iframe title="Google Maps" width="600" height="450" loading="lazy" allowfullscreen src={mapUrl}></iframe>
    </div>
  );
}

export default Map;