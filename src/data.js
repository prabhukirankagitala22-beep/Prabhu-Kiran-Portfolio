// Edit your personal information, links, and portfolio content here.
export const profile = {
  name: 'Kagitala Prabhukiran', initials: 'PK', email: 'prabhukirankagitala@gmail.com', phone: '+91 7993558519',
  tagline: 'Building Intelligent Solutions Through Code, AI & Creativity.',
  roles: ['Python Developer','Machine Learning Enthusiast','Generative AI Enthusiast','Frontend Developer','Problem Solver'],
  // Put your picture at public/profile.jpg, then change this to '/profile.jpg'.
  photo: '', resume: '/resume.pdf',
  social: { GitHub: '', LinkedIn: '', LeetCode: '', CodeChef: '', HackerRank: '' },
  about: 'I am a B.Tech student at Prasad V. Potluri Siddhartha Institute of Technology with a passion for Python, machine learning, Generative AI, and frontend development. I enjoy solving coding problems, exploring new technologies, and building useful applications. I have completed a Generative AI workshop and frontend development training.'
}
export const skills = [
  {title:'Programming',icon:'code',items:['Python','C','Java']},
  {title:'Machine Learning & Data',icon:'brain',items:['Data Cleaning','Data Preprocessing','EDA','Feature Engineering','Data Visualization','Regression','Classification','Model Evaluation']},
  {title:'Libraries',icon:'layers',items:['Pandas','NumPy','Matplotlib','Seaborn','Scikit-learn']},
  {title:'Data Structures',icon:'database',items:['Arrays','Strings','Linked Lists','Stacks','Queues']},
  {title:'Frontend & Gen AI',icon:'sparkles',items:['Frontend Development Training','Generative AI Workshop']},
  {title:'Soft Skills',icon:'users',items:['Problem Solving','Teamwork','Communication']}
]
// Add specific frontend technologies after confirming what your training covered.
export const frontendSkills = []
export const projects = [
  {id:'01',title:'Student Performance Prediction System',type:'Machine Learning · Regression',description:'Predicting student academic performance from attendance, study hours and previous scores.',details:['Performed data preprocessing, exploratory data analysis, and feature engineering to identify factors influencing student performance.','Implemented and compared regression models using Python and Scikit-learn.'],stack:['Python','Pandas','NumPy','Matplotlib','Scikit-learn'],github:'',demo:'',visual:'performance'},
  {id:'02',title:'Customer Churn Prediction',type:'Machine Learning · Classification',description:'Identifying customers at risk of churn using demographic and service-usage data.',details:['Applied data cleaning, exploratory data analysis, and feature selection.','Evaluated classification models using accuracy, precision, recall and F1-score.'],stack:['Python','Pandas','NumPy','Matplotlib','Scikit-learn'],github:'',demo:'',visual:'churn'},
  {id:'03',title:'Sales Data Analysis Dashboard',type:'Analytics · Visualization',description:'Exploring revenue trends, top-performing products and regional sales patterns.',details:['Cleaned and analyzed structured sales data to uncover trends and insights.','Created visualizations of key performance indicators for data-driven decisions.'],stack:['Python','Pandas','NumPy','Matplotlib','Seaborn'],github:'',demo:'',visual:'sales'}
]
export const education = [
  {school:'Prasad V. Potluri Siddhartha Institute of Technology',course:'Bachelor of Technology (B.Tech)',result:'CGPA 8.12 / 10'},
  {school:'Narayana Junior College',course:'Intermediate (MPC)',result:'88.3%'},
  {school:'S S G High School',course:'Class 10',result:'74%'}
]
export const certifications = [
  {name:'Generative AI Workshop',issuer:'Completed',image:''},
  {name:'Frontend Development Training',issuer:'Completed',image:''},
  {name:'STEP Course English Proficiency',issuer:'The Hindu',image:''},
  {name:'C Programming Language Certification',issuer:'Bytesone',image:''}
]
export const achievements = [
  {name:'CodeChef Silver Badge',number:'250+',label:'Coding problems solved',detail:'Completed all 500 difficulty-rating problems.',platform:'CodeChef'},
  {name:'LeetCode 50 Days Coding Badge',number:'180+',label:'Problems solved',detail:'Earned the 50 Days Coding Badge.',platform:'LeetCode'}
]
