import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Bomb, 
  FlameKindling, 
  Droplets, 
  Sparkles, 
  Beaker, 
  Skull, 
  Radiation, 
  FlaskConical,
  Package,
  AlertTriangle,
  Shield,
  CheckCircle2
} from 'lucide-react';

const hazardClasses = [
  {
    class: '1',
    name: 'Explosives',
    icon: Bomb,
    description: 'Materials capable of producing an explosion or pyrotechnic effect.',
    examples: 'Dynamite, Fireworks, Ammunition',
  },
  {
    class: '2',
    name: 'Gases',
    icon: FlameKindling,
    description: 'Compressed, liquefied, dissolved or refrigerated gases.',
    examples: 'Propane, Oxygen, Nitrogen',
  },
  {
    class: '3',
    name: 'Flammable Liquids',
    icon: Droplets,
    description: 'Liquids with flash point below 60°C that ignite easily.',
    examples: 'Gasoline, Ethanol, Acetone',
  },
  {
    class: '4',
    name: 'Flammable Solids',
    icon: Sparkles,
    description: 'Substances liable to spontaneous combustion.',
    examples: 'Matches, Sulfur, Metal Powders',
  },
  {
    class: '5',
    name: 'Oxidizing Substances',
    icon: Beaker,
    description: 'Substances that can cause or enhance combustion.',
    examples: 'Hydrogen Peroxide, Bleach',
  },
  {
    class: '6',
    name: 'Toxic Substances',
    icon: Skull,
    description: 'Substances harmful to human health if ingested or inhaled.',
    examples: 'Pesticides, Cyanides, Arsenic',
  },
  {
    class: '7',
    name: 'Radioactive Materials',
    icon: Radiation,
    description: 'Materials emitting ionizing radiation.',
    examples: 'Uranium, Medical Isotopes',
  },
  {
    class: '8',
    name: 'Corrosive Substances',
    icon: FlaskConical,
    description: 'Substances that cause severe damage to living tissue.',
    examples: 'Sulfuric Acid, Battery Acid',
  },
  {
    class: '9',
    name: 'Miscellaneous',
    icon: Package,
    description: 'Dangerous goods not covered by other classes.',
    examples: 'Lithium Batteries, Dry Ice',
  },
  {
    class: 'ORM',
    name: 'Other Regulated Materials',
    icon: AlertTriangle,
    description: 'Materials with limited hazard during transportation.',
    examples: 'Consumer Commodities',
  },
];

const safetyFeatures = [
  'UN Certified Packaging',
  'Trained Hazmat Personnel',
  'Real-time GPS Tracking',
  '24/7 Emergency Response',
  'Full Insurance Coverage',
  'Regulatory Compliance',
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  return (
    <section id="services" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Special Service
          </span>
          <h2 className="section-title text-foreground">
            Specialized <span className="gradient-text">Dangerous Goods</span> Handling
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            We are certified to transport all 10 classes of dangerous goods with the highest safety standards.
          </p>
        </motion.div>

        {/* Hazard Classes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {hazardClasses.map((hazard, index) => (
            <motion.div
              key={hazard.class}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelectedClass(selectedClass === hazard.class ? null : hazard.class)}
              className={`hazard-card cursor-pointer ${
                selectedClass === hazard.class ? 'border-primary shadow-card bg-primary/5' : 'bg-card'
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                  selectedClass === hazard.class 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-primary/10 text-primary'
                }`}>
                  <hazard.icon className="w-7 h-7" />
                </div>
                <div className="text-xs font-semibold text-muted-foreground mb-1">Class {hazard.class}</div>
                <h4 className="font-display font-bold text-foreground text-sm">{hazard.name}</h4>
              </div>
              
              {selectedClass === hazard.class && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 pt-4 border-t border-border text-left"
                >
                  <p className="text-sm text-muted-foreground mb-2">{hazard.description}</p>
                  <p className="text-xs text-primary font-medium">Examples: {hazard.examples}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Safety Standards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 border border-primary/10"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <Shield className="w-10 h-10 text-primary-foreground" />
              </div>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                Committed to Safety Excellence
              </h3>
              <p className="text-muted-foreground mb-6">
                Our operations meet international safety standards and regulations for dangerous goods transportation.
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {safetyFeatures.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
