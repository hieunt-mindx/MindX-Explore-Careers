import React, { useState, useMemo } from 'react';
import { 
  Rocket, 
  Code, 
  Gamepad2, 
  Monitor, 
  ArrowRight, 
  CheckCircle2, 
  RefreshCcw,
  Target,
  PenTool,
  BrainCircuit,
  Plane,
  ChevronRight
} from 'lucide-react';
import { QUIZ_DATA } from './constants';
import { TrackType, Question, ScoreProfile, Option } from './types';

// --- Sub-Components ---

const Header = () => (
  <header className="absolute top-0 left-0 w-full p-6 z-10">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center text-white font-bold text-xl">
          M
        </div>
        <span className="font-bold text-xl tracking-tight text-gray-900">MindX Technology School</span>
      </div>
    </div>
  </header>
);

const Landing = ({ onStart }: { onStart: () => void }) => (
  <div className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden bg-white">
    {/* Decorative blobs */}
    <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-60"></div>
    <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-gray-50 rounded-full blur-3xl opacity-60"></div>
    
    <div className="text-center max-w-3xl relative z-10 animate-fade-in">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-brand-red font-medium text-sm mb-6">
        <Rocket size={16} />
        <span>Khám phá tiềm năng công nghệ</span>
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
        Bạn thuộc về thế giới <br/>
        <span className="text-brand-red">Game</span> hay <span className="text-brand-red">Web</span>?
      </h1>
      <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
        Thực hiện bài trắc nghiệm nhanh để khám phá tính cách công nghệ của bạn và tìm ra lộ trình nghề nghiệp phù hợp nhất tại MindX.
      </p>
      <button 
        onClick={onStart}
        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-brand-red text-white text-lg font-bold rounded-full hover:bg-red-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
      >
        Bắt đầu ngay
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
      
      {/* Testimonials snippet */}
      <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col items-center">
        <p className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-4">Được tin tưởng bởi 40,000+ học viên</p>
        <div className="flex -space-x-4">
           {[1, 2, 3, 4].map((i) => (
             <img key={i} src={`https://picsum.photos/100/100?random=${i}`} alt="Student" className="w-12 h-12 rounded-full border-4 border-white shadow-sm" />
           ))}
           <div className="w-12 h-12 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600 shadow-sm">+2k</div>
        </div>
      </div>
    </div>
  </div>
);

const TrackSelection = ({ onSelect }: { onSelect: (track: TrackType) => void }) => (
  <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-gray-50">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Chọn lĩnh vực bạn muốn khám phá</h2>
      <p className="text-gray-600">Hãy chọn một lĩnh vực để bắt đầu bài kiểm tra năng lực</p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
      {/* Game Track Card */}
      <div 
        onClick={() => onSelect('game')}
        className="group bg-white rounded-3xl p-8 border-2 border-transparent hover:border-brand-red cursor-pointer transition-all shadow-xl hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
        <div className="w-16 h-16 bg-red-100 text-brand-red rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:bg-brand-red group-hover:text-white transition-colors">
          <Gamepad2 size={32} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Lập Trình Game</h3>
        <p className="text-gray-500 mb-6">Bạn thích sáng tạo thế giới ảo, logic game và trải nghiệm người chơi?</p>
        <span className="text-brand-red font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
          Chọn Game <ArrowRight size={18} />
        </span>
      </div>

      {/* Web Track Card */}
      <div 
        onClick={() => onSelect('web')}
        className="group bg-white rounded-3xl p-8 border-2 border-transparent hover:border-brand-red cursor-pointer transition-all shadow-xl hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:bg-blue-600 group-hover:text-white transition-colors">
          <Monitor size={32} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Lập Trình Web</h3>
        <p className="text-gray-500 mb-6">Bạn quan tâm đến xây dựng ứng dụng, giao diện và hệ thống website?</p>
        <span className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
          Chọn Web <ArrowRight size={18} />
        </span>
      </div>
    </div>
  </div>
);

const Quiz = ({ 
  data, 
  track,
  onComplete 
}: { 
  data: Question[]; 
  track: TrackType;
  onComplete: (answers: Record<number, 'A'|'B'|'C'>) => void 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, 'A'|'B'|'C'>>({});
  const [animating, setAnimating] = useState(false);

  const currentQuestion = data[currentIndex];
  const totalQuestions = data.length;
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  const handleSelect = (optionId: 'A'|'B'|'C') => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: optionId }));
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
        setAnimating(false);
      }, 300);
    } else {
      onComplete(answers);
    }
  };

  const isSelected = (id: 'A'|'B'|'C') => answers[currentQuestion.id] === id;
  const canProceed = !!answers[currentQuestion.id];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-24 pb-12 px-4">
      {/* Progress Bar */}
      <div className="w-full max-w-3xl mb-8">
        <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
          <span>Câu hỏi {currentIndex + 1} / {totalQuestions}</span>
          <span>{track === 'game' ? 'Game Track' : 'Web Track'}</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-brand-red transition-all duration-500 ease-out" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className={`w-full max-w-3xl transition-all duration-300 ${animating ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'}`}>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-snug">
          {currentQuestion.question}
        </h2>

        <div className="space-y-4">
          {currentQuestion.options.map((opt) => (
            <div 
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              className={`
                group relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex items-start gap-4
                ${isSelected(opt.id) 
                  ? 'border-brand-red bg-red-50 shadow-md' 
                  : 'border-white bg-white hover:border-red-200 hover:shadow-lg'
                }
              `}
            >
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-colors
                ${isSelected(opt.id) ? 'bg-brand-red text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-red-100 group-hover:text-brand-red'}
              `}>
                {opt.id}
              </div>
              <p className={`text-lg ${isSelected(opt.id) ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
                {opt.text}
              </p>
              {isSelected(opt.id) && (
                <div className="absolute top-1/2 right-4 -translate-y-1/2 text-brand-red">
                  <CheckCircle2 size={24} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <button
            onClick={handleNext}
            disabled={!canProceed}
            className={`
              flex items-center gap-2 px-8 py-3 rounded-full font-bold text-lg transition-all
              ${canProceed 
                ? 'bg-brand-red text-white shadow-lg hover:bg-red-700 hover:-translate-y-1' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }
            `}
          >
            {currentIndex === totalQuestions - 1 ? 'Hoàn thành' : 'Tiếp theo'}
            {currentIndex !== totalQuestions - 1 && <ChevronRight size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

const Result = ({ 
  track, 
  answers, 
  onRetake 
}: { 
  track: TrackType; 
  answers: Record<number, 'A'|'B'|'C'>; 
  onRetake: () => void 
}) => {
  // Calculate Score
  const result = useMemo(() => {
    const counts = { A: 0, B: 0, C: 0 };
    Object.values(answers).forEach(ans => {
      counts[ans]++;
    });

    const maxScore = Math.max(counts.A, counts.B, counts.C);
    const dominantType = counts.A === maxScore ? 'A' : counts.B === maxScore ? 'B' : 'C';

    if (track === 'web') {
      if (dominantType === 'A') return { title: 'Software Engineer', desc: 'Bạn có tư duy logic sắc bén, thích cấu trúc và tối ưu hóa hệ thống.', icon: <Code size={48} /> };
      if (dominantType === 'B') return { title: 'AI Engineer', desc: 'Bạn có tầm nhìn chiến lược, quan tâm đến mục tiêu và giải pháp thông minh.', icon: <BrainCircuit size={48} /> };
      return { title: 'Air Traffic Controller', desc: 'Bạn có khả năng điều phối, cảm nhận tốt về luồng trải nghiệm và thẩm mỹ.', icon: <Plane size={48} /> };
    } else {
      // Game Track
      if (dominantType === 'A') return { title: 'Software Engineer', desc: 'Tư duy logic, cấu trúc vững chắc là điểm mạnh của bạn trong thế giới Game.', icon: <Code size={48} /> };
      if (dominantType === 'B') return { title: 'Business Mindset', desc: 'Bạn có tư duy mục tiêu, hiểu khách hàng và chiến thuật kinh doanh.', icon: <Target size={48} /> };
      return { title: 'Content Creator', desc: 'Tư duy thẩm mỹ, sáng tạo và nghệ thuật là vũ khí bí mật của bạn.', icon: <PenTool size={48} /> };
    }
  }, [track, answers]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-[2.5rem] p-8 md:p-12 max-w-2xl w-full shadow-2xl text-center relative overflow-hidden animate-fade-in">
        {/* Background Accent */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-red-500 to-red-600"></div>
        
        <div className="relative z-10 -mt-4 mb-6 flex justify-center">
          <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center text-brand-red">
            {result.icon}
          </div>
        </div>

        <h2 className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-2">Kết quả của bạn</h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">{result.title}</h1>
        
        <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
          <p className="text-xl text-gray-700 leading-relaxed">
            {result.desc}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-brand-red text-white rounded-full font-bold shadow-lg hover:bg-red-700 transition-all hover:-translate-y-1">
            Đăng ký tư vấn ngay
          </button>
          <button 
            onClick={onRetake}
            className="px-8 py-3 bg-white border-2 border-gray-200 text-gray-600 rounded-full font-bold hover:border-gray-400 hover:text-gray-900 transition-all flex items-center justify-center gap-2"
          >
            <RefreshCcw size={18} /> Làm lại bài test
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  const [step, setStep] = useState<'landing' | 'selection' | 'quiz' | 'result'>('landing');
  const [selectedTrack, setSelectedTrack] = useState<TrackType | null>(null);
  const [answers, setAnswers] = useState<Record<number, 'A'|'B'|'C'>>({});

  const handleStart = () => setStep('selection');

  const handleSelectTrack = (track: TrackType) => {
    setSelectedTrack(track);
    setStep('quiz');
  };

  const handleQuizComplete = (finalAnswers: Record<number, 'A'|'B'|'C'>) => {
    setAnswers(finalAnswers);
    setStep('result');
  };

  const handleRetake = () => {
    setStep('landing');
    setSelectedTrack(null);
    setAnswers({});
  };

  return (
    <div className="font-sans text-gray-900 selection:bg-red-100 selection:text-brand-red">
      <Header />
      
      {step === 'landing' && <Landing onStart={handleStart} />}
      
      {step === 'selection' && <TrackSelection onSelect={handleSelectTrack} />}
      
      {step === 'quiz' && selectedTrack && (
        <Quiz 
          data={QUIZ_DATA[selectedTrack]} 
          track={selectedTrack} 
          onComplete={handleQuizComplete} 
        />
      )}
      
      {step === 'result' && selectedTrack && (
        <Result 
          track={selectedTrack} 
          answers={answers} 
          onRetake={handleRetake} 
        />
      )}
    </div>
  );
};

export default App;
