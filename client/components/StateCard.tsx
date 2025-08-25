import { StateUT } from "@shared/india-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface StateCardProps {
  state: StateUT;
}

export function StateCard({ state }: StateCardProps) {
  const navigate = useNavigate();

  const handleExploreMore = () => {
    navigate(`/states/${state.slug}`);
  };

  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
      {/* State Image */}
      <div className="aspect-video relative overflow-hidden">
        <img
          src={state.image_url}
          alt={state.state_name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        
        {/* Type Badge */}
        <div className="absolute top-4 right-4">
          <Badge 
            variant={state.type === 'state' ? 'default' : 'secondary'}
            className={`${
              state.type === 'state' 
                ? 'bg-blue-600 hover:bg-blue-700' 
                : 'bg-purple-600 hover:bg-purple-700'
            } text-white font-poppins`}
          >
            {state.type === 'state' ? 'State' : 'Union Territory'}
          </Badge>
        </div>

        {/* State Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl md:text-2xl font-bold font-poppins mb-2 group-hover:text-orange-300 transition-colors">
            {state.state_name}
          </h3>
          <p className="text-sm md:text-base text-white/90 font-poppins font-light mb-4">
            Capital: {state.capital}
          </p>
          
          <Button
            onClick={handleExploreMore}
            size="sm"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-poppins font-medium rounded-lg transition-all duration-300 border-0"
          >
            Explore More
          </Button>
        </div>
      </div>
      
      {/* Quick Info (Hidden on mobile, shown on hover on desktop) */}
      <div className="p-4 bg-white group-hover:bg-gray-50 transition-colors">
        <div className="flex justify-between items-center text-sm text-gray-600 font-poppins">
          <span>Population: {state.population}</span>
          <span>Area: {state.area}</span>
        </div>
        {state.official_languages && (
          <div className="mt-2 text-xs text-gray-500 font-poppins">
            Languages: {state.official_languages.join(', ')}
          </div>
        )}
      </div>
    </div>
  );
}
