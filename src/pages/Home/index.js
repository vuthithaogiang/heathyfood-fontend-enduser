import Introdction from './Introduction';
import NutritionByCategory from './NutritionByCategory';
import BestSeller from './BestSeller';

function Home() {
    return (
        <div className="">
            <Introdction />
            <NutritionByCategory />
            <BestSeller />
        </div>
    );
}

export default Home;
