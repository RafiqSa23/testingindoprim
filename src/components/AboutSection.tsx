import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Eye, Target, Star, Users, Globe, Heart, Award, Briefcase } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Ethical Standards',
    description: 'We uphold the highest ethical practices in every business interaction.',
  },
  {
    icon: Briefcase,
    title: 'Firm & Consistent',
    description: 'Decisive action with consistent quality in our service delivery.',
  },
  {
    icon: Target,
    title: 'Proactive Improvement',
    description: 'Continuously innovating and improving our logistics solutions.',
  },
  {
    icon: Users,
    title: 'Mutual Respect',
    description: 'Building strong relationships based on trust and respect.',
  },
  {
    icon: Globe,
    title: 'World Class Excellence',
    description: 'Delivering international standards in dangerous goods logistics.',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            About Us
          </span>
          <h2 className="section-title text-foreground">
            Your Trusted Partner in <span className="gradient-text">Dangerous Goods Logistics</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            PT Indomitra Prima Mandiri is a world-class logistics company specializing in safe 
            transportation of dangerous goods across Indonesia and beyond.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="value-card relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To become the world's best logistics company that can compete fairly, 
              while improving employee welfare to create optimal and satisfactory results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="value-card relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary" />
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center">
                <Target className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To provide the best service to customers, be responsive to customer requests, 
              and ensure accuracy and speed of delivery in every shipment.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-display font-bold text-foreground">Our Core Values</h3>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="value-card text-center group"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-display font-bold text-foreground mb-2">{value.title}</h4>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
