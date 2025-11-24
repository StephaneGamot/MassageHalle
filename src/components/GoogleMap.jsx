
export default function GoogleMap() {
  return (
    <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg">
      <iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.5696912176845!2d4.256385212462524!3d50.7464694658871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c23185a0470331%3A0xdb0fae66d0976815!2sMassage%20Relaxant%20-%20La%20voie%20du%20bien-%C3%AAtre!5e0!3m2!1sfr!2sbe!4v1764024459493!5m2!1sfr!2sbe"
        width="100%"
        height="100%"
        style={{ border: 0 }}                
        allowFullScreen                      
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
                title="Carte Google Maps montrant l’emplacement de La Voie du Bien-Être à Halle"
      />
    </div>
  );
}
