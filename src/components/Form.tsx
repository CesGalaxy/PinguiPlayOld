interface FormPoint {
    type: 'text' | 'number';
    label: string;
    placeholder: string;
    defaultValue: string | number;
}

export function createForm(points: FormPoint[]) {
    // TODO: Forms
}