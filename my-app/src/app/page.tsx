import Image from "next/image";

export default function Home() {
  return (
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
              <div className="flex h-full">
                <div className="w-1/2 bg-gray-200">
                  <img className="w-full h-full" src="image 1.png" alt="Erro ao carregar imagem!"/>
                </div>
                <div className="w-1/2 flex">
                  <div className="m-auto">
                    <h2 className="w-96 h-16 text-center text-5x1 font-bold">Avaliação de Professores</h2>
                  </div>
                </div>
              </div>              
            </div>
          </div>
      );
}
