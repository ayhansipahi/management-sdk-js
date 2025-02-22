import { SharedContracts } from './shared-contracts';
export namespace SpaceContracts {
    export interface ISpaceContract {
        id: string;
        name: string;
        codename: string;
        web_spotlight_root_item?: SharedContracts.IReferenceObjectContract;
    }

    export type ISpacesListingResponseContract = ISpaceContract[];

    export interface IAddSpaceResponseContract extends ISpaceContract {}

    export interface IViewSpaceResponseContract extends ISpaceContract {}

    export interface IAddSpaceResponseContract extends ISpaceContract {}

    export interface IModifySpaceResponseContract extends ISpaceContract {}

    export interface IDeleteSpaceResponseContact {}

    export interface IModifySpacePostContract {
        name: string;
        codename: string;
    }
    export interface IAddSpacePostContract {
        name: string;
        codename: string;
        webSpotlightRootItem?: SharedContracts.IReferenceObjectContract;
    }
}
