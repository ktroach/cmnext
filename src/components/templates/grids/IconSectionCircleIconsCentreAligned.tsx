import {
    BookOpenIcon,
    MessagesSquareIcon,
    Settings2Icon,
  } from "lucide-react";
  
  export default function IconSectionCircleIconsCentreAligned() {
    return (
      <>
        {/* Icon Blocks */}
        <div className="container py-24 lg:py-32">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
            {/* Icon Block */}
            <div className="text-center">
              <div className="flex justify-center items-center w-12 h-12 bg-primary border rounded-full mx-auto">
                <Settings2Icon className="flex-shrink-0 w-5 h-5 text-primary-foreground" />
              </div>
              <div className="mt-3">
                <h3 className="text-lg font-semibold ">Responsive</h3>
                <p className="mt-1 text-muted-foreground">
                  Responsive, and mobile-first project on the web
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="text-center">
              <div className="flex justify-center items-center w-12 h-12 bg-primary border rounded-full mx-auto">
                <Settings2Icon className="flex-shrink-0 w-5 h-5 text-primary-foreground" />
              </div>
              <div className="mt-3">
                <h3 className="text-lg font-semibold ">Customizable</h3>
                <p className="mt-1 text-muted-foreground">
                  Components are easily customized and extendable
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="text-center">
              <div className="flex justify-center items-center w-12 h-12 bg-primary border rounded-full mx-auto">
                <BookOpenIcon className="flex-shrink-0 w-5 h-5 text-primary-foreground" />
              </div>
              <div className="mt-3">
                <h3 className="text-lg font-semibold ">Documentation</h3>
                <p className="mt-1 text-muted-foreground">
                  Every component and plugin is well documented
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="text-center">
              <div className="flex justify-center items-center w-12 h-12 bg-primary border rounded-full mx-auto">
                <MessagesSquareIcon className="flex-shrink-0 w-5 h-5 text-primary-foreground" />
              </div>
              <div className="mt-3">
                <h3 className="text-lg font-semibold ">24/7 Support</h3>
                <p className="mt-1 text-muted-foreground">
                  Contact us 24 hours a day, 7 days a week
                </p>
              </div>
            </div>
            {/* End Icon Block */}
          </div>
        </div>
        {/* End Icon Blocks */}
      </>
    );
  }
  