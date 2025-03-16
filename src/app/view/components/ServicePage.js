import Services from "@/app/view/components/Services";
import ActionBar from "@/app/view/components/ActionBar";
import {getServicesFromCategory} from "@/app/service/CategorieService";
import "/src/styles/ServicePage.css"

const ServicePage = async ({ category }) => {
    const servicesFromCategory = await getServicesFromCategory(category);

    return (
        <div className="service-page-container">
            <div className="service-page-header-to-be-made" >

            </div>
            <div className="service-page-actionbar-container">
                <ActionBar />
            </div>

            <div className="service-page-services-container">
                <Services data={servicesFromCategory} />
            </div>
            <div className="service-page-contact-container">
                <p>Contact soon...</p>
            </div>
        </div>
    );
};

export default ServicePage;