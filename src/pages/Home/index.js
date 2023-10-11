import Introdction from './Introduction';
import NutritionByCategory from './NutritionByCategory';
import BestSeller from './BestSeller';
import UpcomingEvent from './UpcomingEvent';

function Home() {
    return (
        <div className="">
            <Introdction />
            <NutritionByCategory />
            <BestSeller />
            <UpcomingEvent />
        </div>
    );
}

export default Home;
