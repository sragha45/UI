class Hosts{
    public hostName: string;
    public isProvider: boolean;
}

export class ClusterType {
    public clusterName: string;
    public showChild: boolean;
    public hosts: Hosts[];
}