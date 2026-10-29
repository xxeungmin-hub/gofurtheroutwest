import "../styles/DeathCampaignSection.css";

export default function DeathCampaignSection({ collection }) {
  const campaign = collection?.campaign;
  if (!campaign) return null;
  const photos = (campaign.items ?? []).slice(0, 2);
  return (
    <section className="death-campaign-section">
      <div className="death-campaign-inner">
        <header className="death-campaign-heading">
          {campaign.titleImage ? (
            <h2><img className="death-campaign-title" src={campaign.titleImage} alt={campaign.title} loading="lazy" /></h2>
          ) : <h2 className="death-campaign-fallback">{campaign.title}</h2>}
          <p>{campaign.subtitle}</p>
        </header>
        <div className="death-campaign-photos">
          {photos.map((item, index) => (
            <div className={`death-campaign-photo death-campaign-photo-${index + 1}`} key={item.src}>
              <img src={item.src} alt={`${collection.name} campaign ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
