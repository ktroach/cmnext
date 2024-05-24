import clsx from 'clsx'
import { Icons } from '@/styles/icons'

export default function LogoIcon({
  size,
  iconKey,
  drawBorder,
}: {
  size?: 'sm' | undefined
  iconKey?: string | undefined
  drawBorder?: boolean
}) {
  const container: string = drawBorder
    ? 'flex flex-none items-center justify-center dark:bg-black border border-neutral-200 bg-white dark:border-neutral-700'
    : 'flex flex-none items-center justify-center dark:bg-black'
  let classes = clsx(container, {
    'h-[40px] w-[40px] rounded-xl': !size,
    'h-[30px] w-[30px] rounded-lg': size === 'sm',
  })
  // @ts-ignore
  const Icon: any = iconKey ? Icons[iconKey] : Icons.gitHub 
  return (
    <div className={classes}>
      <Icon
        className={clsx({
          'h-[20px] w-[20px]': !size,
          'h-[16px] w-[16px]': size === 'sm',
        })}
      />
    </div>
  )
}
