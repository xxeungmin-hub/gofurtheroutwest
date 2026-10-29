import "../styles/MonumentCampaignSection.css";

export default function MonumentCampaignSection({ collection }) {
  const campaign = collection.campaign;
  if (!campaign) return null;

  return (
    <section className="monument-campaign-section">
      <header className="monument-campaign-heading">
        {campaign.titleImage ? (
          <h2 className="monument-campaign-title">
            <img src={campaign.titleImage} alt={campaign.title} style={{ width: campaign.titleWidth ?? "min(65vw, 850px)" }} />
          </h2>
        ) : (
          <h2 className="monument-campaign-title monument-campaign-title-text">{campaign.title}</h2>
        )}
        <p className="monument-campaign-subtitle">{campaign.subtitle}</p>
      </header>
      <div className="monument-campaign-photos">
        {campaign.items.map((item, i) => (
          <img src={item.src} key={item.src} alt={`${collection.name} campaign image ${i + 1}`} loading="lazy" />
        ))}
      </div>
    </section>
  );
}
