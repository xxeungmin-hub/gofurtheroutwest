import "../styles/ZionCampaignSection.css";
import "../styles/CollectionCampaignSection.css";
import "../styles/HorseshoeCampaignSection.css";

export default function HorseshoeCampaignSection({ collection }) {
  const campaign = collection.campaign;
  if (!campaign) return null;
  const items = campaign.items ?? [];
  return (
    <section className="zion-campaign-section horseshoe-campaign-section">
      <div className="zion-campaign-inner horseshoe-campaign-inner">
        <div className="zion-campaign-heading horseshoe-campaign-heading">
          <h2 className="zion-campaign-title">
            {campaign.titleImage ? <img className="collection-campaign-lettering" src={campaign.titleImage} alt={campaign.title} style={{ width:campaign.titleWidth ?? "min(60vw,860px)" }} /> : campaign.title}
          </h2>
          <p className="zion-campaign-subtitle">{campaign.subtitle}</p>
        </div>
        <div className="horseshoe-campaign-gallery">
          <div className="horseshoe-campaign-row horseshoe-campaign-row-top">
            {items.slice(0,2).map((item,i) => <img key={item.src} src={item.src} alt={`${collection.name} campaign ${i+1}`} loading="lazy" />)}
          </div>
          <div className="horseshoe-campaign-row horseshoe-campaign-row-bottom">
            {items.slice(2,4).map((item,i) => <img key={item.src} src={item.src} alt={`${collection.name} campaign ${i+3}`} loading="lazy" />)}
          </div>
        </div>
      </div>
    </section>
  );
}
