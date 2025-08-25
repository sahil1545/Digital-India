import { STATES_AND_UTS } from "@shared/india-data";
import { StateCard } from "@/components/StateCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function StatesGallery() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'all' | 'state' | 'union_territory'>('all');

  const filteredStatesAndUTs = STATES_AND_UTS.filter(item => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  const states = filteredStatesAndUTs.filter(item => item.type === 'state');
  const unionTerritories = filteredStatesAndUTs.filter(item => item.type === 'union_territory');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate("/")}
                className="font-poppins"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              <div>
                <h1 className="text-2xl md:text-4xl font-bold text-gray-900 font-poppins">
                  Choose Your Destination
                </h1>
                <p className="text-gray-600 font-poppins font-light mt-1">
                  Discover {STATES_AND_UTS.length} incredible destinations across India
                </p>
              </div>
            </div>
            
            {/* Filter Options */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <div className="flex gap-2">
                <Button
                  variant={filter === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilter('all')}
                  className="font-poppins"
                >
                  All ({STATES_AND_UTS.length})
                </Button>
                <Button
                  variant={filter === 'state' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilter('state')}
                  className="font-poppins"
                >
                  States ({states.length})
                </Button>
                <Button
                  variant={filter === 'union_territory' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilter('union_territory')}
                  className="font-poppins"
                >
                  UTs ({unionTerritories.length})
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {filter === 'all' && (
          <>
            {/* States Section */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-poppins">
                  States
                </h2>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-poppins font-medium">
                  {states.length}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {states.map((state) => (
                  <StateCard key={state.slug} state={state} />
                ))}
              </div>
            </div>

            {/* Union Territories Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-poppins">
                  Union Territories
                </h2>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-poppins font-medium">
                  {unionTerritories.length}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {unionTerritories.map((ut) => (
                  <StateCard key={ut.slug} state={ut} />
                ))}
              </div>
            </div>
          </>
        )}

        {/* Filtered Results */}
        {filter !== 'all' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredStatesAndUTs.map((item) => (
              <StateCard key={item.slug} state={item} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredStatesAndUTs.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 font-poppins text-lg">
              No destinations found for the selected filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
