import { useParams, useNavigate } from "react-router-dom";
import { STATES_AND_UTS } from "@shared/india-data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle, Brain, MapPin, Users, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function StateDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const stateData = STATES_AND_UTS.find(state => state.slug === slug);

  if (!stateData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 font-poppins mb-4">
            State or Union Territory not found
          </h1>
          <Button onClick={() => navigate("/states")} className="font-poppins">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to States
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/states")}
              className="font-poppins"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to States
            </Button>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-900 font-poppins">
                  {stateData.state_name}
                </h1>
                <Badge 
                  variant={stateData.type === 'state' ? 'default' : 'secondary'}
                  className={`${
                    stateData.type === 'state' 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-purple-600 hover:bg-purple-700'
                  } text-white font-poppins`}
                >
                  {stateData.type === 'state' ? 'State' : 'Union Territory'}
                </Badge>
              </div>
              <p className="text-gray-600 font-poppins font-light mt-1">
                Capital: {stateData.capital}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={stateData.image_url}
          alt={stateData.state_name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-8 left-8 text-white">
          <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-2">
            Welcome to {stateData.state_name}
          </h2>
          <p className="text-lg font-poppins font-light opacity-90">
            Discover the rich heritage and vibrant culture
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-poppins font-semibold text-gray-900 mb-1">Capital</h3>
            <p className="text-gray-600 font-poppins">{stateData.capital}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-poppins font-semibold text-gray-900 mb-1">Population</h3>
            <p className="text-gray-600 font-poppins">{stateData.population}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <Globe className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <h3 className="font-poppins font-semibold text-gray-900 mb-1">Area</h3>
            <p className="text-gray-600 font-poppins">{stateData.area}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <MessageCircle className="w-8 h-8 text-orange-600 mx-auto mb-3" />
            <h3 className="font-poppins font-semibold text-gray-900 mb-1">Languages</h3>
            <p className="text-gray-600 font-poppins text-sm">
              {stateData.official_languages?.join(', ') || 'Multiple'}
            </p>
          </div>
        </div>

        {/* Content Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Culture & Traditions Placeholder */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
              Culture & Traditions
            </h3>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 text-center">
              <p className="text-gray-600 font-poppins mb-4">
                This section will contain detailed information about the rich culture, customs, and festivals of {stateData.state_name}.
              </p>
              <p className="text-sm text-gray-500 font-poppins">
                Continue prompting to have me fill in this content with detailed cultural information.
              </p>
            </div>
          </div>

          {/* Languages & Monuments Placeholder */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              Languages & Monuments
            </h3>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 text-center">
              <p className="text-gray-600 font-poppins mb-4">
                This section will showcase the linguistic diversity and famous monuments of {stateData.state_name}.
              </p>
              <p className="text-sm text-gray-500 font-poppins">
                Continue prompting to have me fill in this content with monument galleries and language details.
              </p>
            </div>
          </div>

          {/* Quiz Section Placeholder */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-6 flex items-center gap-3">
              <Brain className="w-6 h-6 text-green-600" />
              Interactive Quiz
            </h3>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 text-center">
              <p className="text-gray-600 font-poppins mb-4">
                Test your knowledge about {stateData.state_name} with our interactive quiz!
              </p>
              <Button 
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 font-poppins"
                disabled
              >
                <Brain className="w-4 h-4 mr-2" />
                Start Quiz (Coming Soon)
              </Button>
              <p className="text-sm text-gray-500 font-poppins mt-3">
                Continue prompting to have me implement the interactive quiz feature.
              </p>
            </div>
          </div>

          {/* AI Chatbot Placeholder */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-6 flex items-center gap-3">
              <MessageCircle className="w-6 h-6 text-indigo-600" />
              AI Assistant
            </h3>
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-6 text-center">
              <p className="text-gray-600 font-poppins mb-4">
                Ask our AI assistant anything about {stateData.state_name}!
              </p>
              <Button 
                className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 font-poppins"
                disabled
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat Now (Coming Soon)
              </Button>
              <p className="text-sm text-gray-500 font-poppins mt-3">
                Continue prompting to have me implement the AI chatbot feature.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
