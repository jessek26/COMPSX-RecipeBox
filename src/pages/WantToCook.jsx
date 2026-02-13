import RecipeGrid from "../components/RecipeGrid";
import { useCookList } from "../contexts/CookListContext";

function WantToCook() {
    //use custom hook to access cooklist from context
    const{ cookList } = useCookList();

    return (
        <main className="main-content">
            <div className="content-header">
                <h2>Want to Cook</h2>
                <p>Recipes you're planning to make</p>
            </div>
            {/* pass cooklist as a prop */}
            {cookList.length > 0 ? (
                <RecipeGrid recipes={cookList} />
            ) : (
                <div className="empty-state">
                    <p>No recipes in your cook list yet. Start adding some from the home page!</p>
                </div>
            )}
        </main>
    );
};

export default WantToCook;