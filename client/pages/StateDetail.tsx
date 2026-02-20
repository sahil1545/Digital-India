import { useParams, useNavigate } from "react-router-dom";
import { STATES_AND_UTS } from "@shared/india-data";
import { QUIZ_DATA, getDefaultQuestions } from "@shared/quiz-data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle, Brain, MapPin, Users, Globe, Landmark, Utensils, TrendingUp, Sparkles, Calendar, Camera } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { InteractiveQuiz } from "@/components/InteractiveQuiz";
import { AIChatbot } from "@/components/AIChatbot";
import { GehuAIChatbot } from "@/components/GoogleAIChatbot";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion } from "framer-motion";

export default function StateDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const stateData = STATES_AND_UTS.find(state => state.slug === slug);

  // Get quiz questions for this state
  const quizData = QUIZ_DATA.find(quiz => quiz.stateSlug === slug);
  const quizQuestions = quizData ? quizData.questions : getDefaultQuestions(stateData?.state_name || 'this region', stateData?.slug || '');

  if (!stateData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 dark:from-background dark:to-muted/10 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold text-foreground font-poppins mb-4">
            State or Union Territory not found
          </h1>
          <Button onClick={() => navigate("/states")} className="font-poppins">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to States
          </Button>
        </motion.div>
      </div>
    );
  }

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
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate("/states")}
                  className="font-poppins"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to States
                </Button>
              </motion.div>
              <div>
                <div className="flex items-center gap-3">
                  <motion.h1
                    className="text-2xl md:text-4xl font-bold text-foreground font-poppins"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {stateData.state_name}
                  </motion.h1>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Badge
                      variant={stateData.type === 'state' ? 'default' : 'secondary'}
                      className={`${
                        stateData.type === 'state'
                          ? 'bg-primary hover:bg-primary/90'
                          : 'bg-secondary hover:bg-secondary/90'
                      } text-primary-foreground font-poppins`}
                    >
                      {stateData.type === 'state' ? 'State' : 'Union Territory'}
                    </Badge>
                  </motion.div>
                </div>
                <motion.p
                  className="text-muted-foreground font-poppins font-light mt-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Capital: {stateData.capital}
                </motion.p>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        className="relative h-96 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={stateData.image_url}
          alt={stateData.state_name}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent dark:from-black/70"></div>
        <motion.div
          className="absolute bottom-8 left-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold font-poppins mb-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            Welcome to {stateData.state_name}
          </motion.h2>
          <motion.p
            className="text-lg font-poppins font-light opacity-90"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
          >
            Discover the rich heritage and vibrant culture
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="bg-card rounded-xl p-6 shadow-lg text-center border hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
            </motion.div>
            <h3 className="font-poppins font-semibold text-card-foreground mb-1">Capital</h3>
            <p className="text-muted-foreground font-poppins">{stateData.capital}</p>
          </motion.div>
          <motion.div
            className="bg-card rounded-xl p-6 shadow-lg text-center border hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
            >
              <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
            </motion.div>
            <h3 className="font-poppins font-semibold text-card-foreground mb-1">Population</h3>
            <p className="text-muted-foreground font-poppins">{stateData.population}</p>
          </motion.div>
          <motion.div
            className="bg-card rounded-xl p-6 shadow-lg text-center border hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, type: "spring" }}
            >
              <Globe className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            </motion.div>
            <h3 className="font-poppins font-semibold text-card-foreground mb-1">Area</h3>
            <p className="text-muted-foreground font-poppins">{stateData.area}</p>
          </motion.div>
          <motion.div
            className="bg-card rounded-xl p-6 shadow-lg text-center border hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
            >
              <MessageCircle className="w-8 h-8 text-orange-600 mx-auto mb-3" />
            </motion.div>
            <h3 className="font-poppins font-semibold text-card-foreground mb-1">Languages</h3>
            <p className="text-muted-foreground font-poppins text-sm">
              {stateData.official_languages?.join(', ') || 'Multiple'}
            </p>
          </motion.div>
        </motion.div>

        {/* Detailed Information Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Famous Places */}
          {stateData.famous_places && stateData.famous_places.length > 0 && (
            <motion.div
              className="bg-card rounded-xl p-8 shadow-lg border hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -2 }}
            >
              <motion.h3
                className="text-2xl font-bold font-poppins text-card-foreground mb-6 flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, type: "spring" }}
                >
                  <Camera className="w-6 h-6 text-blue-600" />
                </motion.div>
                Famous Places
              </motion.h3>
              <div className="space-y-3">
                {stateData.famous_places.map((place, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-primary rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    />
                    <span className="font-poppins text-card-foreground">{place}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Culture & Traditions */}
          {stateData.culture_traditions && stateData.culture_traditions.length > 0 && (
            <motion.div
              className="bg-card rounded-xl p-8 shadow-lg border hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -2 }}
            >
              <motion.h3
                className="text-2xl font-bold font-poppins text-card-foreground mb-6 flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                >
                  <Sparkles className="w-6 h-6 text-orange-600" />
                </motion.div>
                Culture & Traditions
              </motion.h3>
              <div className="space-y-3">
                {stateData.culture_traditions.map((tradition, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-orange-600 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                    />
                    <span className="font-poppins text-card-foreground">{tradition}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Festivals */}
          {stateData.festivals && stateData.festivals.length > 0 && (
            <motion.div
              className="bg-card rounded-xl p-8 shadow-lg border hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ y: -2 }}
            >
              <motion.h3
                className="text-2xl font-bold font-poppins text-card-foreground mb-6 flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9, type: "spring" }}
                >
                  <Calendar className="w-6 h-6 text-purple-600" />
                </motion.div>
                Festivals
              </motion.h3>
              <div className="space-y-3">
                {stateData.festivals.map((festival, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-purple-600 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.0 + index * 0.1 }}
                    />
                    <span className="font-poppins text-card-foreground">{festival}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Monuments */}
          {stateData.monuments && stateData.monuments.length > 0 && (
            <motion.div
              className="bg-card rounded-xl p-8 shadow-lg border hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ y: -2 }}
            >
              <motion.h3
                className="text-2xl font-bold font-poppins text-card-foreground mb-6 flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.0, type: "spring" }}
                >
                  <Landmark className="w-6 h-6 text-indigo-600" />
                </motion.div>
                Monuments & Heritage Sites
              </motion.h3>
              <div className="space-y-3">
                {stateData.monuments.map((monument, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-950/30 transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-indigo-600 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.1 + index * 0.1 }}
                    />
                    <span className="font-poppins text-card-foreground">{monument}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Underrated Facts Section */}
        {stateData.underrated_facts && stateData.underrated_facts.length > 0 && (
          <motion.div
            className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 rounded-xl p-8 shadow-lg mb-8 border"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.h3
              className="text-2xl font-bold font-poppins text-card-foreground mb-6 flex items-center gap-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <motion.div
                initial={{ rotate: -180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ delay: 1.1, type: "spring" }}
              >
                <Sparkles className="w-6 h-6 text-yellow-600" />
              </motion.div>
              Underrated Facts
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stateData.underrated_facts.map((fact, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow border"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1, type: "spring" }}
                  >
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </motion.div>
                  <p className="font-poppins text-card-foreground leading-relaxed">{fact}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Cuisine & Economy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Cuisine */}
          {stateData.cuisine && stateData.cuisine.length > 0 && (
            <motion.div
              className="bg-card rounded-xl p-8 shadow-lg border hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ y: -2 }}
            >
              <motion.h3
                className="text-2xl font-bold font-poppins text-card-foreground mb-6 flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, type: "spring" }}
                >
                  <Utensils className="w-6 h-6 text-red-600" />
                </motion.div>
                Famous Cuisine
              </motion.h3>
              <div className="space-y-3">
                {stateData.cuisine.map((dish, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-950/20 rounded-lg hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-red-600 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.3 + index * 0.1 }}
                    />
                    <span className="font-poppins text-card-foreground">{dish}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Economy */}
          {stateData.economy && (
            <motion.div
              className="bg-card rounded-xl p-8 shadow-lg border hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileHover={{ y: -2 }}
            >
              <motion.h3
                className="text-2xl font-bold font-poppins text-card-foreground mb-6 flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.3, type: "spring" }}
                >
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </motion.div>
                Economy
              </motion.h3>
              <motion.div
                className="font-poppins text-card-foreground leading-relaxed bg-green-50 dark:bg-green-950/20 p-6 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                {stateData.economy}
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Interactive Quiz & AI Chatbot Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* Interactive Quiz Section */}
          <motion.div
            className="bg-card rounded-xl p-8 shadow-lg border hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -2 }}
          >
            <motion.h3
              className="text-2xl font-bold font-poppins text-card-foreground mb-6 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
              >
                <Brain className="w-6 h-6 text-green-600" />
              </motion.div>
              Interactive Quiz
            </motion.h3>
            <InteractiveQuiz questions={quizQuestions} stateName={stateData.state_name} />
          </motion.div>

          {/* AI Chatbot Section */}
          <motion.div
            className="bg-card rounded-xl p-8 shadow-lg border hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -2 }}
          >
            <motion.h3
              className="text-2xl font-bold font-poppins text-card-foreground mb-6 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.3, type: "spring" }}
              >
                <MessageCircle className="w-6 h-6 text-indigo-600" />
              </motion.div>
              AI Assistants
            </motion.h3>
            <div className="space-y-4">
              <AIChatbot stateSlug={stateData.slug} stateName={stateData.state_name} />
              <GehuAIChatbot stateSlug={stateData.slug} stateName={stateData.state_name} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
