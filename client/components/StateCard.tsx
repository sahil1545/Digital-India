import { StateUT } from "@shared/india-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, MapPin } from "lucide-react";
import { useState } from "react";

interface StateCardProps {
  state: StateUT;
}

export function StateCard({ state }: StateCardProps) {
  const navigate = useNavigate();
  const [isFavorited, setIsFavorited] = useState(false);

  const handleExploreMore = () => {
    navigate(`/states/${state.slug}`);
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorited(!isFavorited);
  };

  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl bg-card shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer border"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* State Image */}
      <div className="aspect-video relative overflow-hidden">
        <motion.img
          src={state.image_url}
          alt={state.state_name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg";
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        {/* Favorite Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 left-4 bg-black/20 hover:bg-black/40 text-white border-0"
              onClick={toggleFavorite}
            >
              <Heart className={`h-4 w-4 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {isFavorited ? 'Remove from favorites' : 'Add to favorites'}
          </TooltipContent>
        </Tooltip>

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
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl md:text-2xl font-bold font-poppins mb-2 group-hover:text-orange-300 transition-colors">
            {state.state_name}
          </h3>
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-4 w-4" />
            <p className="text-sm md:text-base text-white/90 font-poppins font-light">
              {state.capital}
            </p>
          </div>

          <Button
            onClick={handleExploreMore}
            size="sm"
            className="bg-gradient-to-r from-hero-gradient-start to-hero-gradient-end hover:from-orange-600 hover:to-red-600 text-white font-poppins font-medium rounded-lg transition-all duration-300 border-0"
          >
            Explore More
          </Button>
        </motion.div>
      </div>

      {/* Quick Info */}
      <motion.div
        className="p-4 bg-card group-hover:bg-muted/50 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex justify-between items-center text-sm text-muted-foreground font-poppins mb-2">
          <span>Population: {state.population}</span>
          <span>Area: {state.area}</span>
        </div>
        {state.official_languages && (
          <div className="text-xs text-muted-foreground font-poppins">
            Languages: {state.official_languages.join(', ')}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
