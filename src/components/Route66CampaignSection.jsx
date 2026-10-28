import "../styles/ZionCampaignSection.css";
import "../styles/CollectionCampaignSection.css";
import "../styles/Route66CampaignSection.css";

export default function Route66CampaignSection({ collection }) {
  const campaign = collection.campaign;
  if (!campaign) return null;
  const images = campaign.items ?? [];

  return (
    <section className="zion-campaign-section route66-campaign-section">
      <div className="zion-campaign-inner route66-campaign-inner">
        <div className="zion-campaign-heading route66-campaign-heading">
          <h2 className="zion-campaign-title">
            {campaign.titleImage ? (
              <img className="collection-campaign-lettering" src={campaign.titleImage} alt={campaign.title} style={{ width: campaign.titleWidth ?? "min(62vw, 880px)" }} />
            ) : campaign.title}
          </h2>
          <p className="zion-campaign-subtitle">{campaign.subtitle}</p>
        </div>
        <div className="route66-campaign-gallery">
          {images.slice(0, 4).map((item, index) => (
            <div className={`route66-campaign-cell route66-campaign-cell-${index + 1}`} key={`${item.src}-${index}`}>
              <img src={item.src} alt={`${collection.name} campaign ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
