import {motion} from 'framer-motion'
import {NumberTicker} from '../ui/number-ticker'

export default function ShowOff(){
    const stats = [
        {
            img: '/fullfill.webp',
            title: 'Dreams Fulfilled',
            desc: 'Successfully guided students',
            value: 1200,
            accentColor: 'text-orange-400'
        },
        {
            img: '/countries.webp',
            title: 'Countries Reached',
            desc: 'Global coverage',
            value: 30,
            accentColor: 'text-blue-500'
        },
        {
            img: '/assurance.webp',
            title: 'Quality Assurance',
            desc: 'Trusted by students',
            value: 100,
            accentColor: 'text-emerald-500'
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    }

    const borderClass = (index) => {
        if (index === 0) return 'border-r-2 border-slate-200'
        if (index === 1) return 'border-r-2 border-l-2 border-slate-200'
        if (index === 2) return 'border-l-2 border-slate-200'
        return ''
    }

    return (
        <>
        <motion.div className='w-full h-auto min-h-[70vh] py-16 sm:py-20 md:py-24 bg-white flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 relative overflow-hidden'
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, staggerChildren: 0.5 }}
          viewport={{ once: false, amount: 0.1 }}
        >

            {/* Background decorative elements */}
            <div className='absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse'></div>
            <div className='absolute bottom-10 right-10 w-40 h-40 bg-orange-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse'></div>

            {/* Title Section */}
            <motion.div className='text-center mb-16 z-10'
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
                <h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 poppins mb-2'>Our Impact</h2>
                <p className='text-sm sm:text-base md:text-lg text-slate-600 font-medium'>Transforming lives through world-class education</p>
            </motion.div>

            {/* Cards Grid */}
            <motion.div
              className='w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 z-10'
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        className={`group relative px-6 sm:px-8 md:px-10 py-8 sm:py-10 ${borderClass(index)}`}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    >
                        {/* Image Container */}
                        <div className='relative w-full h-40 sm:h-48 md:h-56 mb-6 overflow-hidden rounded-2xl'>
                            <img
                                src={stat.img}
                                alt={stat.title}
                                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                            />
                        </div>

                        {/* Content */}
                        <div className='text-center'>
                            <h3 className='text-2xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 poppins mb-2'>
                                {stat.title}
                            </h3>
                            <p className='text-xs sm:text-sm md:text-base text-slate-500 font-medium mb-4 sm:mb-6'>
                                {stat.desc}
                            </p>

                            {/* Number Ticker */}
                            <div className='mb-4'>
                                <NumberTicker
                                    value={stat.value}
                                    className={`text-4xl font-extrabold poppins ${stat.accentColor}`}
                                />
                                <span className='text-slate-400 text-4xl font-bold'>
                                    {stat.title === 'Quality Assurance' ? '%' : '+'}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

        </motion.div>
        </>
    )
}