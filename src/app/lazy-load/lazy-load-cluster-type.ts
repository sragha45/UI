//Type definition of the Clusters. 

class Hosts{
    public hostName: string;
    public isProvider: boolean;
    public showVM: boolean;
    public vmList?: string[];               // Can be empty for providers. 
}

export class ClusterType {
    public clusterName: string;
    public showChild: boolean;
    public hosts: Hosts[];
}