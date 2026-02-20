import { STATES_AND_UTS } from "@shared/india-data";
import { StateCard } from "@/components/StateCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Filter, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function StatesGallery() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'all' | 'state' | 'union_territory'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStatesAndUTs = useMemo(() => {
    return STATES_AND_UTS.filter(item => {
      const matchesFilter = filter === 'all' || item.type === filter;
      const matchesSearch = item.state_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.capital.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, searchQuery]);

  const states = filteredStatesAndUTs.filter(item => item.type === 'state');
  const unionTerritories = filteredStatesAndUTs.filter(item => item.type === 'union_territory');

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 dark:from-background dark:to-muted/10">
      {/* Header */}
      <motion.div
        className="bg-card/95 backdrop-blur-sm shadow-md sticky top-0 z-40 border-b"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate("/")}
                  className="font-poppins"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </motion.div>
              <div>
                <motion.h1
                  className="text-2xl md:text-4xl font-bold text-foreground font-poppins"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Choose Your Destination
                </motion.h1>
                <motion.p
                  className="text-muted-foreground font-poppins font-light mt-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Discover {STATES_AND_UTS.length} incredible destinations across India
                </motion.p>
              </div>
            </div>

            {/* Search, Filter Options and Theme Toggle */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search states..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64 font-poppins"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <div className="flex gap-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant={filter === 'all' ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setFilter('all')}
                          className="font-poppins"
                        >
                          All ({STATES_AND_UTS.length})
                        </Button>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent>
                      Show all states and union territories
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant={filter === 'state' ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setFilter('state')}
                          className="font-poppins"
                        >
                          States ({states.length})
                        </Button>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent>
                      Show only states
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant={filter === 'union_territory' ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setFilter('union_territory')}
                          className="font-poppins"
                        >
                          UTs ({unionTerritories.length})
                        </Button>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent>
                      Show only union territories
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {filter === 'all' && (
          <>
            {/* States Section */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="w-1 h-8 bg-gradient-to-b from-primary to-primary/80 rounded-full"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                />
                <motion.h2
                  className="text-2xl md:text-3xl font-bold text-foreground font-poppins"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  States
                </motion.h2>
                <motion.span
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-poppins font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {states.length}
                </motion.span>
              </div>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {states.map((state, index) => (
                  <motion.div
                    key={state.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                  >
                    <StateCard state={state} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Union Territories Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="w-1 h-8 bg-gradient-to-b from-secondary to-secondary/80 rounded-full"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                />
                <motion.h2
                  className="text-2xl md:text-3xl font-bold text-foreground font-poppins"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Union Territories
                </motion.h2>
                <motion.span
                  className="bg-secondary/10 text-secondary-foreground px-3 py-1 rounded-full text-sm font-poppins font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {unionTerritories.length}
                </motion.span>
              </div>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                {unionTerritories.map((ut, index) => (
                  <motion.div
                    key={ut.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index + 0.8, duration: 0.3 }}
                  >
                    <StateCard state={ut} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}

        {/* Filtered Results */}
        {filter !== 'all' && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredStatesAndUTs.map((item, index) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                <StateCard state={item} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Empty State */}
        {filteredStatesAndUTs.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-muted-foreground font-poppins text-lg">
              No destinations found for the selected filter.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
