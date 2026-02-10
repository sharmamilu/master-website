import SolutionHero from "../../components/SolutionComponent/SolutionHero";
import SolutionOfferings from "../../components/SolutionComponent/SolutionOfferings";
import ProductsShowcase from "../../components/SolutionComponent/ProductsShowcase";
import IndustryUseCases from "../../components/SolutionComponent/IndustryUseCases";
import Testimonials from "../../components/SolutionComponent/Testimonials";
const Solution = () => {
    return (
        <>
            <SolutionHero />
            <SolutionOfferings />
            <ProductsShowcase />
            <IndustryUseCases />
            <Testimonials />
        </>
    );
}

export default Solution