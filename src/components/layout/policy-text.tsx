import {cn} from "@/lib/utils";

interface PolicyTextProps {
    classNames?: string,
}

export default function PolicyText({classNames}: PolicyTextProps) {
    return (
        <p className={cn(classNames, " leading-[120%] text-[#9b9b9b] text-[10px] font-normal 2md:text-[14px]")}>
            Нажимая кнопку «Купить», Пользователь соглашается на разовое списание денежных средств для получения
            пожизненного доступа к приложению. Пользователь соглашается, что данные кредитной/дебетовой карты будут
            сохранены для осуществления покупок дополнительных услуг сервиса в случае желания пользователя.
        </p>
    )
}