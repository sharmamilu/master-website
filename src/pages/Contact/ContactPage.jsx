import ContactHero from "../../components/ContactComponent/ContactHero";
import ContactMap from "../../components/ContactComponent/ContactMap";
import ContactForm from "../../components/ContactComponent/ContactForm";
import OfficeHours from "../../components/ContactComponent/OfficeHours";
const ContactPage = () => {
    return (
        <div>
            <ContactHero />
            <ContactMap />
            <ContactForm />
            <OfficeHours />
        </div>
    );
};

export default ContactPage;