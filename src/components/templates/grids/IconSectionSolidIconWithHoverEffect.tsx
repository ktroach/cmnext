import {
    BookOpenIcon,
    ChevronRightIcon,
    MessagesSquareIcon,
    Settings2Icon,
} from "lucide-react";
  
  export default function IconSectionSolidIconWithHoverEffect() {
    return (
      <>
        {/* Icon Blocks */}
        <div className="container py-24 lg:py-32">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
            {/* Icon Block */}
            <a
              className="group flex flex-col justify-center hover:bg-primary-foreground/90 rounded-lg p-4 md:p-7 "
              href="#"
            >
              <div className="flex justify-center items-center w-12 bg-primary h-12 border rounded-lg">
                <Settings2Icon className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold">Responsive</h3>
                <p className="mt-1 text-muted-foreground">
                  Responsive, and mobile-first project on the web
                </p>
                <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm  decoration-2 group-hover:underline font-medium">
                  Learn more
                  <ChevronRightIcon className="flex-shrink-0 w-4 h-4" />
                </span>
              </div>
            </a>
            {/* End Icon Block */}
            {/* Icon Block */}
            <a
              className="group flex flex-col justify-center hover:bg-primary-foreground/90 rounded-lg p-4 md:p-7 "
              href="#"
            >
              <div className="flex justify-center items-center w-12 bg-primary h-12 border rounded-lg">
                <Settings2Icon className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold">Customizable</h3>
                <p className="mt-1 text-muted-foreground">
                  Components are easily customized and extendable
                </p>
                <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm  decoration-2 group-hover:underline font-medium">
                  Learn more
                  <ChevronRightIcon className="flex-shrink-0 w-4 h-4" />
                </span>
              </div>
            </a>
            {/* End Icon Block */}
            {/* Icon Block */}
            <a
              className="group flex flex-col justify-center hover:bg-primary-foreground/90 rounded-lg p-4 md:p-7 "
              href="#"
            >
              <div className="flex justify-center items-center w-12 bg-primary h-12 border rounded-lg">
                <BookOpenIcon className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold">Documentation</h3>
                <p className="mt-1 text-muted-foreground">
                  Every component and plugin is well documented
                </p>
                <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm  decoration-2 group-hover:underline font-medium">
                  Learn more
                  <ChevronRightIcon className="flex-shrink-0 w-4 h-4" />
                </span>
              </div>
            </a>
            {/* End Icon Block */}
            {/* Icon Block */}
            <a
              className="group flex flex-col justify-center hover:bg-primary-foreground/90 rounded-lg p-4 md:p-7 "
              href="#"
            >
              <div className="flex justify-center items-center w-12 bg-primary h-12 border rounded-lg">
                <MessagesSquareIcon className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold">24/7 Support</h3>
                <p className="mt-1 text-muted-foreground">
                  Contact us 24 hours a day, 7 days a week
                </p>
                <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm  decoration-2 group-hover:underline font-medium">
                  Learn more
                  <ChevronRightIcon className="flex-shrink-0 w-4 h-4" />
                </span>
              </div>
            </a>
            {/* End Icon Block */}
          </div>
        </div>
        {/* End Icon Blocks */}
      </>
    );
  }
  