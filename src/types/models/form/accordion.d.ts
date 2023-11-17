export interface AccordionProps {
    id: string | number;
    children: React.ReactNode;
    onClickAction: (name: TYPE_ACTION_BUTTON_ICON, id: number | string) => void;
    isAdded?: boolean;
    isOpenDefault?: boolean;
    title: string;
    urlImage: string;
    version?: 'primary' | 'secondary'; // Añade aquí los nombres de las versiones que necesites
  }