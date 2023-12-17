import { ActivityIndicator } from "react-native-paper";
import { StyleSheet, ScrollView, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/type";

import FilterComponent from "../components/filter";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useSearchRecipesQuery } from "../api/recipe-api";
import { useDebounce } from "use-debounce";
import RecipeCard from "../components/recipe-card";
import { useNavigation } from "@react-navigation/native";
import { TRANSLATE } from "../translate";

const titouan = {
  from: 1,
  to: 2,
  count: 20,
  _links: {},
  hits: [
    {
      recipe: {
        label: "Sauce Lyonnaise recipes",
        image:
          "https://edamam-product-images.s3.amazonaws.com/web-img/abc/abc9ecfae492067b0052fce4418cba9d?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLWVhc3QtMSJGMEQCIBzge4ZSvnbhYWEz37NhUOPKs4Z8Mg%2FLkHJXY%2BS7jrFcAiAU1iAsTuV3KlpvSNgpwWoEH7b5j9cQgjR1v3ri30zo2irCBQij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMwn1gjGpwaZ99q6dTKpYFSuTPX%2BQ6BfgxBo%2FunXRV2REWCn5EPqRsVyDcXVFy1DiWtaGWdv9yq1%2BAXX5RWFZWigNNh5en%2Bp6LWqdDHeCg2uNwLzicwmJxLvVf0rzavZwHWB3NjPue7jw39rK80vUfgxjzUgLcd1SpMRCvU%2FbDocMXr4dn1s%2FV%2FQk5L0vn26h8skdSvrx%2FwLGQUZVD%2BtcKs9LP%2BKzup7COjDoxz1RZARACtW6dYigsdVJjEe5Ll7X2MhGxybPL31zhEJq39PAvIEaMUWNLVP7y%2BAI8q%2BvpEr0D5hvmIYbtnFxf6BmDxmxSI4kTgBADteZ6JKD9w2gjTdMrYaP6OH83wuAxRXINli%2FgpvqngAcLahJGRPnVlMRufOYvLS86JESNOmdvPlh23vDkbX1LKLYXxDfR08E9rWW9oh3lRXS1HxjbSBkIvWRLRAO%2BYh%2BAlg0ZoI19iHPVp4Jizuu%2FPr4JXuVD1EURsCOWeT%2F5Ck1iuaL%2F1RMWNaw9AzVomhS1QW8r3azmHRXfiMvJxokSMZj2qmzh%2BFz%2F9n%2BAkvU9F3koW9mj5f0MH76NOCLxVakJ0zJ5xYyn4u4akw2%2BsFnsAfx8r91rtHxW2Y2tzh%2BuN9ybY21agJwxhuv1Oh5LVRqSc0o5NLvqySiNgnlOCtlGVb6yZz16GT0eMHoKfLhriltjEwykn1A8EfI7%2B0LMjBv7F00y2Bx9URfsByctU6yV4ji4NfLDtWZsZ94wFUgq8Fmb1q9bobHUkqt3yhCK5fbpmpOpXsUg%2FdjLb%2FK0iagNl93%2BOMMYm3esbxiDXF8Wr7Q4wE9GpWBhr6FFLz2VUIHj89dvE7PoKgYN3COZsbnDI3LeukR7WjoFzMfNSTeynrpCZ7MsL4HQ14LRbcyuhoAw3or7qwY6sgEEmhtS%2Bf41%2B0uz3wpQvwZpPqj3GMSjp1nK6QlIHOuJQ5ojodwkboCN%2BNhTkSzUXIzKvMs3AdDVPJqaUjgx8E9mB3fWGPSPjWBvZF35Pt65fRSXb5gVv%2BlRd23Wss4usm9CdDH7MplQRq8ryWPcitn2atPtYQrRZrV5xYWKHwrl5o9b%2BdOUUD55Lbn6t5SOR4NJfX6dkQlYJzn7Br%2BUrYGBmKZaP1JFd4Sb%2BOTESrO6ZUZB&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231217T114248Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPGJFAXF4%2F20231217%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8fe8dd8ddd0f1d33139c38ba8db67a6bbe1968ccf5c8cb56176c0fd2dba38566",
        uri: "uri",
      },
      _links: {
        self: {
          href: "https://api.edamam.com/api/recipes/v2/b4e0c7fdc400ec4658a3e8427af579a0?type=public&app_id=f0248383&app_key=c867793979c46d9be3096919b92f7f7a",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        label: "Sauce Robert recipes",
        image:
          "https://edamam-product-images.s3.amazonaws.com/web-img/03f/03f37a02e2feaf7ac4dc4c3aa0aca56c?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLWVhc3QtMSJGMEQCIBzge4ZSvnbhYWEz37NhUOPKs4Z8Mg%2FLkHJXY%2BS7jrFcAiAU1iAsTuV3KlpvSNgpwWoEH7b5j9cQgjR1v3ri30zo2irCBQij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMwn1gjGpwaZ99q6dTKpYFSuTPX%2BQ6BfgxBo%2FunXRV2REWCn5EPqRsVyDcXVFy1DiWtaGWdv9yq1%2BAXX5RWFZWigNNh5en%2Bp6LWqdDHeCg2uNwLzicwmJxLvVf0rzavZwHWB3NjPue7jw39rK80vUfgxjzUgLcd1SpMRCvU%2FbDocMXr4dn1s%2FV%2FQk5L0vn26h8skdSvrx%2FwLGQUZVD%2BtcKs9LP%2BKzup7COjDoxz1RZARACtW6dYigsdVJjEe5Ll7X2MhGxybPL31zhEJq39PAvIEaMUWNLVP7y%2BAI8q%2BvpEr0D5hvmIYbtnFxf6BmDxmxSI4kTgBADteZ6JKD9w2gjTdMrYaP6OH83wuAxRXINli%2FgpvqngAcLahJGRPnVlMRufOYvLS86JESNOmdvPlh23vDkbX1LKLYXxDfR08E9rWW9oh3lRXS1HxjbSBkIvWRLRAO%2BYh%2BAlg0ZoI19iHPVp4Jizuu%2FPr4JXuVD1EURsCOWeT%2F5Ck1iuaL%2F1RMWNaw9AzVomhS1QW8r3azmHRXfiMvJxokSMZj2qmzh%2BFz%2F9n%2BAkvU9F3koW9mj5f0MH76NOCLxVakJ0zJ5xYyn4u4akw2%2BsFnsAfx8r91rtHxW2Y2tzh%2BuN9ybY21agJwxhuv1Oh5LVRqSc0o5NLvqySiNgnlOCtlGVb6yZz16GT0eMHoKfLhriltjEwykn1A8EfI7%2B0LMjBv7F00y2Bx9URfsByctU6yV4ji4NfLDtWZsZ94wFUgq8Fmb1q9bobHUkqt3yhCK5fbpmpOpXsUg%2FdjLb%2FK0iagNl93%2BOMMYm3esbxiDXF8Wr7Q4wE9GpWBhr6FFLz2VUIHj89dvE7PoKgYN3COZsbnDI3LeukR7WjoFzMfNSTeynrpCZ7MsL4HQ14LRbcyuhoAw3or7qwY6sgEEmhtS%2Bf41%2B0uz3wpQvwZpPqj3GMSjp1nK6QlIHOuJQ5ojodwkboCN%2BNhTkSzUXIzKvMs3AdDVPJqaUjgx8E9mB3fWGPSPjWBvZF35Pt65fRSXb5gVv%2BlRd23Wss4usm9CdDH7MplQRq8ryWPcitn2atPtYQrRZrV5xYWKHwrl5o9b%2BdOUUD55Lbn6t5SOR4NJfX6dkQlYJzn7Br%2BUrYGBmKZaP1JFd4Sb%2BOTESrO6ZUZB&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231217T114248Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPGJFAXF4%2F20231217%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8813664991613e4ed9d287eac85fd7307d4832b140351ce429660e0531906ab6",
        uri: "uri",
      },
      _links: {
        self: {
          href: "https://api.edamam.com/api/recipes/v2/626bbcd89748f4bc8bc49f62b92289f2?type=public&app_id=f0248383&app_key=c867793979c46d9be3096919b92f7f7a",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        label: "Sauce Lyonnaise recipes",
        image:
          "https://edamam-product-images.s3.amazonaws.com/web-img/abc/abc9ecfae492067b0052fce4418cba9d?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLWVhc3QtMSJGMEQCIBzge4ZSvnbhYWEz37NhUOPKs4Z8Mg%2FLkHJXY%2BS7jrFcAiAU1iAsTuV3KlpvSNgpwWoEH7b5j9cQgjR1v3ri30zo2irCBQij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMwn1gjGpwaZ99q6dTKpYFSuTPX%2BQ6BfgxBo%2FunXRV2REWCn5EPqRsVyDcXVFy1DiWtaGWdv9yq1%2BAXX5RWFZWigNNh5en%2Bp6LWqdDHeCg2uNwLzicwmJxLvVf0rzavZwHWB3NjPue7jw39rK80vUfgxjzUgLcd1SpMRCvU%2FbDocMXr4dn1s%2FV%2FQk5L0vn26h8skdSvrx%2FwLGQUZVD%2BtcKs9LP%2BKzup7COjDoxz1RZARACtW6dYigsdVJjEe5Ll7X2MhGxybPL31zhEJq39PAvIEaMUWNLVP7y%2BAI8q%2BvpEr0D5hvmIYbtnFxf6BmDxmxSI4kTgBADteZ6JKD9w2gjTdMrYaP6OH83wuAxRXINli%2FgpvqngAcLahJGRPnVlMRufOYvLS86JESNOmdvPlh23vDkbX1LKLYXxDfR08E9rWW9oh3lRXS1HxjbSBkIvWRLRAO%2BYh%2BAlg0ZoI19iHPVp4Jizuu%2FPr4JXuVD1EURsCOWeT%2F5Ck1iuaL%2F1RMWNaw9AzVomhS1QW8r3azmHRXfiMvJxokSMZj2qmzh%2BFz%2F9n%2BAkvU9F3koW9mj5f0MH76NOCLxVakJ0zJ5xYyn4u4akw2%2BsFnsAfx8r91rtHxW2Y2tzh%2BuN9ybY21agJwxhuv1Oh5LVRqSc0o5NLvqySiNgnlOCtlGVb6yZz16GT0eMHoKfLhriltjEwykn1A8EfI7%2B0LMjBv7F00y2Bx9URfsByctU6yV4ji4NfLDtWZsZ94wFUgq8Fmb1q9bobHUkqt3yhCK5fbpmpOpXsUg%2FdjLb%2FK0iagNl93%2BOMMYm3esbxiDXF8Wr7Q4wE9GpWBhr6FFLz2VUIHj89dvE7PoKgYN3COZsbnDI3LeukR7WjoFzMfNSTeynrpCZ7MsL4HQ14LRbcyuhoAw3or7qwY6sgEEmhtS%2Bf41%2B0uz3wpQvwZpPqj3GMSjp1nK6QlIHOuJQ5ojodwkboCN%2BNhTkSzUXIzKvMs3AdDVPJqaUjgx8E9mB3fWGPSPjWBvZF35Pt65fRSXb5gVv%2BlRd23Wss4usm9CdDH7MplQRq8ryWPcitn2atPtYQrRZrV5xYWKHwrl5o9b%2BdOUUD55Lbn6t5SOR4NJfX6dkQlYJzn7Br%2BUrYGBmKZaP1JFd4Sb%2BOTESrO6ZUZB&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231217T114248Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPGJFAXF4%2F20231217%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8fe8dd8ddd0f1d33139c38ba8db67a6bbe1968ccf5c8cb56176c0fd2dba38566",
        uri: "uri",
      },
      _links: {
        self: {
          href: "https://api.edamam.com/api/recipes/v2/b4e0c7fdc400ec4658a3e8427af579a0?type=public&app_id=f0248383&app_key=c867793979c46d9be3096919b92f7f7a",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        label: "Sauce Robert recipes",
        image:
          "https://edamam-product-images.s3.amazonaws.com/web-img/03f/03f37a02e2feaf7ac4dc4c3aa0aca56c?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLWVhc3QtMSJGMEQCIBzge4ZSvnbhYWEz37NhUOPKs4Z8Mg%2FLkHJXY%2BS7jrFcAiAU1iAsTuV3KlpvSNgpwWoEH7b5j9cQgjR1v3ri30zo2irCBQij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMwn1gjGpwaZ99q6dTKpYFSuTPX%2BQ6BfgxBo%2FunXRV2REWCn5EPqRsVyDcXVFy1DiWtaGWdv9yq1%2BAXX5RWFZWigNNh5en%2Bp6LWqdDHeCg2uNwLzicwmJxLvVf0rzavZwHWB3NjPue7jw39rK80vUfgxjzUgLcd1SpMRCvU%2FbDocMXr4dn1s%2FV%2FQk5L0vn26h8skdSvrx%2FwLGQUZVD%2BtcKs9LP%2BKzup7COjDoxz1RZARACtW6dYigsdVJjEe5Ll7X2MhGxybPL31zhEJq39PAvIEaMUWNLVP7y%2BAI8q%2BvpEr0D5hvmIYbtnFxf6BmDxmxSI4kTgBADteZ6JKD9w2gjTdMrYaP6OH83wuAxRXINli%2FgpvqngAcLahJGRPnVlMRufOYvLS86JESNOmdvPlh23vDkbX1LKLYXxDfR08E9rWW9oh3lRXS1HxjbSBkIvWRLRAO%2BYh%2BAlg0ZoI19iHPVp4Jizuu%2FPr4JXuVD1EURsCOWeT%2F5Ck1iuaL%2F1RMWNaw9AzVomhS1QW8r3azmHRXfiMvJxokSMZj2qmzh%2BFz%2F9n%2BAkvU9F3koW9mj5f0MH76NOCLxVakJ0zJ5xYyn4u4akw2%2BsFnsAfx8r91rtHxW2Y2tzh%2BuN9ybY21agJwxhuv1Oh5LVRqSc0o5NLvqySiNgnlOCtlGVb6yZz16GT0eMHoKfLhriltjEwykn1A8EfI7%2B0LMjBv7F00y2Bx9URfsByctU6yV4ji4NfLDtWZsZ94wFUgq8Fmb1q9bobHUkqt3yhCK5fbpmpOpXsUg%2FdjLb%2FK0iagNl93%2BOMMYm3esbxiDXF8Wr7Q4wE9GpWBhr6FFLz2VUIHj89dvE7PoKgYN3COZsbnDI3LeukR7WjoFzMfNSTeynrpCZ7MsL4HQ14LRbcyuhoAw3or7qwY6sgEEmhtS%2Bf41%2B0uz3wpQvwZpPqj3GMSjp1nK6QlIHOuJQ5ojodwkboCN%2BNhTkSzUXIzKvMs3AdDVPJqaUjgx8E9mB3fWGPSPjWBvZF35Pt65fRSXb5gVv%2BlRd23Wss4usm9CdDH7MplQRq8ryWPcitn2atPtYQrRZrV5xYWKHwrl5o9b%2BdOUUD55Lbn6t5SOR4NJfX6dkQlYJzn7Br%2BUrYGBmKZaP1JFd4Sb%2BOTESrO6ZUZB&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231217T114248Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPGJFAXF4%2F20231217%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8813664991613e4ed9d287eac85fd7307d4832b140351ce429660e0531906ab6",
        uri: "uri",
      },
      _links: {
        self: {
          href: "https://api.edamam.com/api/recipes/v2/626bbcd89748f4bc8bc49f62b92289f2?type=public&app_id=f0248383&app_key=c867793979c46d9be3096919b92f7f7a",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        label: "Sauce Lyonnaise recipes",
        image:
          "https://edamam-product-images.s3.amazonaws.com/web-img/abc/abc9ecfae492067b0052fce4418cba9d?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLWVhc3QtMSJGMEQCIBzge4ZSvnbhYWEz37NhUOPKs4Z8Mg%2FLkHJXY%2BS7jrFcAiAU1iAsTuV3KlpvSNgpwWoEH7b5j9cQgjR1v3ri30zo2irCBQij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMwn1gjGpwaZ99q6dTKpYFSuTPX%2BQ6BfgxBo%2FunXRV2REWCn5EPqRsVyDcXVFy1DiWtaGWdv9yq1%2BAXX5RWFZWigNNh5en%2Bp6LWqdDHeCg2uNwLzicwmJxLvVf0rzavZwHWB3NjPue7jw39rK80vUfgxjzUgLcd1SpMRCvU%2FbDocMXr4dn1s%2FV%2FQk5L0vn26h8skdSvrx%2FwLGQUZVD%2BtcKs9LP%2BKzup7COjDoxz1RZARACtW6dYigsdVJjEe5Ll7X2MhGxybPL31zhEJq39PAvIEaMUWNLVP7y%2BAI8q%2BvpEr0D5hvmIYbtnFxf6BmDxmxSI4kTgBADteZ6JKD9w2gjTdMrYaP6OH83wuAxRXINli%2FgpvqngAcLahJGRPnVlMRufOYvLS86JESNOmdvPlh23vDkbX1LKLYXxDfR08E9rWW9oh3lRXS1HxjbSBkIvWRLRAO%2BYh%2BAlg0ZoI19iHPVp4Jizuu%2FPr4JXuVD1EURsCOWeT%2F5Ck1iuaL%2F1RMWNaw9AzVomhS1QW8r3azmHRXfiMvJxokSMZj2qmzh%2BFz%2F9n%2BAkvU9F3koW9mj5f0MH76NOCLxVakJ0zJ5xYyn4u4akw2%2BsFnsAfx8r91rtHxW2Y2tzh%2BuN9ybY21agJwxhuv1Oh5LVRqSc0o5NLvqySiNgnlOCtlGVb6yZz16GT0eMHoKfLhriltjEwykn1A8EfI7%2B0LMjBv7F00y2Bx9URfsByctU6yV4ji4NfLDtWZsZ94wFUgq8Fmb1q9bobHUkqt3yhCK5fbpmpOpXsUg%2FdjLb%2FK0iagNl93%2BOMMYm3esbxiDXF8Wr7Q4wE9GpWBhr6FFLz2VUIHj89dvE7PoKgYN3COZsbnDI3LeukR7WjoFzMfNSTeynrpCZ7MsL4HQ14LRbcyuhoAw3or7qwY6sgEEmhtS%2Bf41%2B0uz3wpQvwZpPqj3GMSjp1nK6QlIHOuJQ5ojodwkboCN%2BNhTkSzUXIzKvMs3AdDVPJqaUjgx8E9mB3fWGPSPjWBvZF35Pt65fRSXb5gVv%2BlRd23Wss4usm9CdDH7MplQRq8ryWPcitn2atPtYQrRZrV5xYWKHwrl5o9b%2BdOUUD55Lbn6t5SOR4NJfX6dkQlYJzn7Br%2BUrYGBmKZaP1JFd4Sb%2BOTESrO6ZUZB&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231217T114248Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPGJFAXF4%2F20231217%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8fe8dd8ddd0f1d33139c38ba8db67a6bbe1968ccf5c8cb56176c0fd2dba38566",
        uri: "uri",
      },
      _links: {
        self: {
          href: "https://api.edamam.com/api/recipes/v2/b4e0c7fdc400ec4658a3e8427af579a0?type=public&app_id=f0248383&app_key=c867793979c46d9be3096919b92f7f7a",
          title: "Self",
        },
      },
    },
    {
      recipe: {
        label: "Sauce Robert recipes",
        image:
          "https://edamam-product-images.s3.amazonaws.com/web-img/03f/03f37a02e2feaf7ac4dc4c3aa0aca56c?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLWVhc3QtMSJGMEQCIBzge4ZSvnbhYWEz37NhUOPKs4Z8Mg%2FLkHJXY%2BS7jrFcAiAU1iAsTuV3KlpvSNgpwWoEH7b5j9cQgjR1v3ri30zo2irCBQij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMwn1gjGpwaZ99q6dTKpYFSuTPX%2BQ6BfgxBo%2FunXRV2REWCn5EPqRsVyDcXVFy1DiWtaGWdv9yq1%2BAXX5RWFZWigNNh5en%2Bp6LWqdDHeCg2uNwLzicwmJxLvVf0rzavZwHWB3NjPue7jw39rK80vUfgxjzUgLcd1SpMRCvU%2FbDocMXr4dn1s%2FV%2FQk5L0vn26h8skdSvrx%2FwLGQUZVD%2BtcKs9LP%2BKzup7COjDoxz1RZARACtW6dYigsdVJjEe5Ll7X2MhGxybPL31zhEJq39PAvIEaMUWNLVP7y%2BAI8q%2BvpEr0D5hvmIYbtnFxf6BmDxmxSI4kTgBADteZ6JKD9w2gjTdMrYaP6OH83wuAxRXINli%2FgpvqngAcLahJGRPnVlMRufOYvLS86JESNOmdvPlh23vDkbX1LKLYXxDfR08E9rWW9oh3lRXS1HxjbSBkIvWRLRAO%2BYh%2BAlg0ZoI19iHPVp4Jizuu%2FPr4JXuVD1EURsCOWeT%2F5Ck1iuaL%2F1RMWNaw9AzVomhS1QW8r3azmHRXfiMvJxokSMZj2qmzh%2BFz%2F9n%2BAkvU9F3koW9mj5f0MH76NOCLxVakJ0zJ5xYyn4u4akw2%2BsFnsAfx8r91rtHxW2Y2tzh%2BuN9ybY21agJwxhuv1Oh5LVRqSc0o5NLvqySiNgnlOCtlGVb6yZz16GT0eMHoKfLhriltjEwykn1A8EfI7%2B0LMjBv7F00y2Bx9URfsByctU6yV4ji4NfLDtWZsZ94wFUgq8Fmb1q9bobHUkqt3yhCK5fbpmpOpXsUg%2FdjLb%2FK0iagNl93%2BOMMYm3esbxiDXF8Wr7Q4wE9GpWBhr6FFLz2VUIHj89dvE7PoKgYN3COZsbnDI3LeukR7WjoFzMfNSTeynrpCZ7MsL4HQ14LRbcyuhoAw3or7qwY6sgEEmhtS%2Bf41%2B0uz3wpQvwZpPqj3GMSjp1nK6QlIHOuJQ5ojodwkboCN%2BNhTkSzUXIzKvMs3AdDVPJqaUjgx8E9mB3fWGPSPjWBvZF35Pt65fRSXb5gVv%2BlRd23Wss4usm9CdDH7MplQRq8ryWPcitn2atPtYQrRZrV5xYWKHwrl5o9b%2BdOUUD55Lbn6t5SOR4NJfX6dkQlYJzn7Br%2BUrYGBmKZaP1JFd4Sb%2BOTESrO6ZUZB&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231217T114248Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPGJFAXF4%2F20231217%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8813664991613e4ed9d287eac85fd7307d4832b140351ce429660e0531906ab6",
        uri: "uri",
      },
      _links: {
        self: {
          href: "https://api.edamam.com/api/recipes/v2/626bbcd89748f4bc8bc49f62b92289f2?type=public&app_id=f0248383&app_key=c867793979c46d9be3096919b92f7f7a",
          title: "Self",
        },
      },
    },
  ],
};

const toto = {
  from: 0,
  to: 0,
  count: 0,
  _links: {
    self: {
      href: "string",
      title: "string",
    },
    next: {
      href: "string",
      title: "string",
    },
  },
  hits: [
    {
      recipe: {
        uri: "string",
        label: "string",
        image: "string",
        images: {
          THUMBNAIL: {
            url: "string",
            width: 0,
            height: 0,
          },
          SMALL: {
            url: "string",
            width: 0,
            height: 0,
          },
          REGULAR: {
            url: "string",
            width: 0,
            height: 0,
          },
          LARGE: {
            url: "string",
            width: 0,
            height: 0,
          },
        },
        source: "string",
        url: "string",
        shareAs: "string",
        yield: 0,
        dietLabels: ["string"],
        healthLabels: ["string"],
        cautions: ["string"],
        ingredientLines: ["string"],
        ingredients: [
          {
            text: "string",
            quantity: 0,
            measure: "string",
            food: "string",
            weight: 0,
            foodId: "string",
          },
        ],
        calories: 0,
        glycemicIndex: 0,
        totalCO2Emissions: 0,
        co2EmissionsClass: "A+",
        totalWeight: 0,
        cuisineType: ["string"],
        mealType: ["string"],
        dishType: ["string"],
        instructions: ["string"],
        tags: ["string"],
        externalId: "string",
        totalNutrients: {},
        totalDaily: {},
        digest: [
          {
            label: "string",
            tag: "string",
            schemaOrgTag: "string",
            total: 0,
            hasRDI: true,
            daily: 0,
            unit: "string",
            sub: {},
          },
        ],
      },
      _links: {
        self: {
          href: "string",
          title: "string",
        },
        next: {
          href: "string",
          title: "string",
        },
      },
    },
  ],
};

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "FlavorFindr"
>;

interface ScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<ScreenProps> = () => {
  const searchQuery = useSelector((state: RootState) => state.recipe.q);
  const healthQuery = useSelector((state: RootState) => state.recipe.health);

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  // tempo
  const [q] = useDebounce(searchQuery, 500);
  const [health] = useDebounce(healthQuery, 500);
  const isDebouncing = searchQuery !== q || healthQuery !== health;

  // const { data, isLoading, isFetching } = useSearchRecipesQuery({ q, health });
  const data = titouan;
  const isLoading = false;
  const isFetching = false;

  return (
    <View style={styles.container}>
      <FilterComponent placeholder={TRANSLATE.SEARCH_RECIPE} />
      {(isFetching || isLoading || isDebouncing) && (
        <ActivityIndicator animating={true} size="large" />
      )}
      {!isDebouncing && data && (
        <ScrollView>
          {data.hits.map((h, key) => (
            <RecipeCard
              key={key}
              label={h.recipe.label}
              image={h.recipe.image}
              onPress={() =>
                navigation.navigate("Recipe", { uri: h.recipe.uri })
              }
              uri={h.recipe.uri}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
});

export default HomeScreen;
