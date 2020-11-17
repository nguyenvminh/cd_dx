import { LightningElement } from 'lwc';
import My_Custom_Label from '@salesforce/label/c.My_Custom_Label';

export default class Hello extends LightningElement {
    label = {
        My_Custom_Label
    };
}