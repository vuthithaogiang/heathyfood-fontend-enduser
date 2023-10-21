import Introdction from './Introduction';
import NutritionByCategory from './NutritionByCategory';
import BestSeller from './BestSeller';
import UpcomingEvent from './UpcomingEvent';
import BackToTop from '~/components/BackToTop';

function Home() {
    return (
        <div className="">
            <Introdction />
            <NutritionByCategory />
            <BestSeller />
            <UpcomingEvent />

            <BackToTop />
        </div>
    );
}

export default Home;
