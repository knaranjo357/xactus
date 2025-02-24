import React, { useState } from 'react';
import { Search, AlertCircle } from 'lucide-react';
import { parsePartNumber } from '../../utils/partNumber';
import type { Config } from '../../types/partNumber';

export const PartNumberSearcher: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState<Config | null>(null);
  const [error, setError] = useState('');

  const handleSearch = () => {
    try {
      const result = parsePartNumber(searchInput);
      setSearchResult(result);
      setError('');
    } catch (err) {
      setError('Número de parte inválido');
      setSearchResult(null);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 mb-12">
      <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <Search className="w-6 h-6 text-[#409ACA]" />
        Buscar Número de Parte
      </h3>
      
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Ej: ST-S-A1111XX-PDXM"
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#409ACA]"
        />
        <button
          onClick={handleSearch}
          className="px-6 py-2 bg-[#409ACA] text-white rounded-lg hover:bg-[#3089b9] transition-colors"
        >
          Buscar
        </button>
      </div>

      {error && (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg flex items-center mb-4">
          <AlertCircle className="w-5 h-5 mr-2" />
          {error}
        </div>
      )}

      {searchResult && (
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium mb-3">Configuración Encontrada:</h4>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <dt className="text-sm text-gray-600">Versión</dt>
                <dd className="font-medium">{
                  searchResult.version === 'S' ? 'Standard' :
                  searchResult.version === 'I' ? 'Intrinsic Safe' :
                  'Vehicle Counter'
                }</dd>
              </div>
              {searchResult.gasType && (
                <div>
                  <dt className="text-sm text-gray-600">Tipo de Gas</dt>
                  <dd className="font-medium">{
                    searchResult.gasType === 'A' ? 'Alphasense' :
                    searchResult.gasType === 'B' ? 'EC Sense' :
                    searchResult.gasType === 'C' ? 'Membrapor' :
                    searchResult.gasType === 'D' ? 'Senva' :
                    'EOC'
                  }</dd>
                </div>
              )}
              {Object.entries(searchResult.gases).some(([_, present]) => present) && (
                <div>
                  <dt className="text-sm text-gray-600">Gases</dt>
                  <dd className="font-medium">
                    {Object.entries(searchResult.gases)
                      .filter(([_, present]) => present)
                      .map(([gas]) => gas)
                      .join(', ')}
                  </dd>
                </div>
              )}
              {searchResult.particulate && (
                <div>
                  <dt className="text-sm text-gray-600">Material Particulado</dt>
                  <dd className="font-medium">{
                    searchResult.particulate === 'P' ? 'Plantower' : 'Sensirion'
                  }</dd>
                </div>
              )}
              {searchResult.meteorology && (
                <div>
                  <dt className="text-sm text-gray-600">Meteorología</dt>
                  <dd className="font-medium">{
                    searchResult.meteorology === 'D' ? 'Davis' :
                    searchResult.meteorology === 'R' ? 'Rika' :
                    'Chao'
                  }</dd>
                </div>
              )}
              {searchResult.noise && (
                <div>
                  <dt className="text-sm text-gray-600">Ruido</dt>
                  <dd className="font-medium">Rika</dd>
                </div>
              )}
              {searchResult.communications && (
                <div>
                  <dt className="text-sm text-gray-600">Comunicaciones</dt>
                  <dd className="font-medium">{
                    searchResult.communications === 'M' ? 'Cellular' :
                    searchResult.communications === 'S' ? 'Satellite Modem' :
                    'LoRaWAN'
                  }</dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      )}
    </div>
  );
};