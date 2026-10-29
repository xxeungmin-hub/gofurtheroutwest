import "../styles/PioneerCampaignSection.css";

export default function PioneerCampaignSection({ collection }) {
  const campaign = collection?.campaign;
  if (!campaign) return null;
  const images = campaign.items ?? [];
  return (
    <section className="pioneer-campaign-section">
      <div className="pioneer-campaign-inner">
        <header className="pioneer-campaign-heading">
          {campaign.titleImage ? (
            <h2><img className="pioneer-campaign-title-image" src={campaign.titleImage} alt={campaign.title} loading="lazy" /></h2>
          ) : <h2 className="pioneer-campaign-fallback-title">{campaign.title}</h2>}
          <p>{campaign.subtitle}</p>
        </header>
        <div className="pioneer-campaign-photos">
          {images.slice(0,4).map((item,index) => (
            <div className={`pioneer-campaign-photo pioneer-campaign-photo-${index+1}`} key={item.src}>
              <img src={item.src} alt={`${collection.name} campaign photo ${index+1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
