import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SectorsData } from '../../data/sectors';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const SectorDetailPage: React.FC = () => {
  const { sectorId } = useParams<{ sectorId: string }>();
  const { t } = useTranslation();
  
  const sector = SectorsData.find(s => s.id === sectorId);
  
  if (!sector) {
    return <div>Sector not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-96 rounded-xl overflow-hidden mb-12">
          <img
            src={sector.image}
            alt={t(`sectors.${sector.id}.title`)}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <div className="flex items-center gap-2 mb-2">
              <sector.icon className="w-8 h-8" />
              <span className="text-lg font-medium">
                {t(`sectors.${sector.id}.subtitle`)}
              </span>
            </div>
            <h1 className="text-4xl font-bold">
              {t(`sectors.${sector.id}.title`)}
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Overview</h2>
            <p className="text-gray-600 mb-8">
              {t(`sectors.${sector.id}.description`)}
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <div className="space-y-4">
                  {sector.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#409ACA] mt-1" />
                      <p className="text-gray-600">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Benefits</h3>
                <div className="space-y-4">
                  {sector.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#4FBA78] mt-1" />
                      <p className="text-gray-600">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6">Our Solutions</h3>
              <div className="space-y-4">
                {/* Add your sector-specific solutions here */}
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-semibold mb-2">Digital Transformation</h4>
                  <p className="text-gray-600 mb-4">
                    Comprehensive digital transformation solutions tailored for the {t(`sectors.${sector.id}.title`)} sector.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center text-[#409ACA] hover:text-[#3089b9] font-medium"
                  >
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
                {/* Add more solutions as needed */}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#409ACA] to-blue-600 rounded-xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">Ready to Transform?</h3>
              <p className="mb-6">
                Let's discuss how we can help your organization thrive in the digital age.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-[#409ACA] rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};