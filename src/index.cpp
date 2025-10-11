#include<iostream>
#include<vector>
using namespace std;

int main(){
    vector<int> vec;
    int a, res = 0, res1 = 0, min = INT8_MAX ;
    int avg = 0, sum = 0;
    int count = 0;
    int small = INT8_MAX;
    int b,max = INT8_MIN;
    cout<<"Enter the number of inputs"<<endl;
    cin>>a;
    vec.resize(a);

    for(int i = 0; i < a ; i++ ){///
        cin>>vec[i];///
        ///
    }
    for(int i = 0 ; i < a ; i++){
        for(int j = 0 ; j< a ; j++){
           if(vec[i]==vec[j])
           count++;
        }
        if(count>1){
                 
            res = count;
           
        }
         if(res < min && count>1){
            min = count; 
            res1 = vec[i];
        }
        
        count=0;
    }
    if(res1==0)
    cout<<"-1";
    else cout<<res1;
    
}
