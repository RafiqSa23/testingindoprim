import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: 'Direktur Utama',
    role: 'President Director',
    initials: 'DU',
    bio: 'Memimpin strategi perusahaan dan pengembangan bisnis logistik barang berbahaya.',
  },
  {
    name: 'Manajer Operasional',
    role: 'Operations Manager',
    initials: 'MO',
    bio: 'Mengawasi seluruh operasional pengiriman dan memastikan kepatuhan keselamatan.',
  },
  {
    name: 'Manajer HSE',
    role: 'HSE Manager',
    initials: 'MH',
    bio: 'Bertanggung jawab atas standar kesehatan, keselamatan kerja, dan lingkungan.',
  },
  {
    name: 'Koordinator DG',
    role: 'Dangerous Goods Specialist',
    initials: 'DG',
    bio: 'Ahli bersertifikat dalam penanganan dan dokumentasi barang berbahaya.',
  },
];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="team" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Users className="w-4 h-4" />
            Our Team
          </span>
          <h2 className="section-title text-foreground">
            Meet Our <span className="gradient-text">Professional Team</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Tim berpengalaman dan bersertifikat yang siap menangani kebutuhan logistik barang berbahaya Anda.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.role}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="value-card text-center group"
            >
              <div className="relative mx-auto mb-4">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl font-display font-bold text-primary-foreground">
                    {member.initials}
                  </span>
                </div>
              </div>
              <h4 className="font-display font-bold text-foreground mb-1">{member.name}</h4>
              <p className="text-sm text-primary font-semibold mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
              <div className="flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="#contact"
                  aria-label={`Hubungi ${member.name} via email`}
                  className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  aria-label={`LinkedIn ${member.name}`}
                  className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
