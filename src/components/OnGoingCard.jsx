const OnGoingCard = ({ 
    width = 32, 
    height = 32, 
    textColor = "text-white", 
    backgroundColor = "bg-red-600"
}) => (
    <div className={`absolute top-0 right-0 w-${width} h-${height}`}>
        <div className={`absolute transform rotate-45 ${backgroundColor} text-center ${textColor} font-semibold py-1 right-[-40px] top-[32px] w-[170px]`}>
            <span className="block">On Going</span>
        </div>
    </div>
)
export default OnGoingCard;