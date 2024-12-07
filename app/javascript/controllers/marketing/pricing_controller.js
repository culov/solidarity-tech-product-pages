import { Controller} from "stimulus";
export default class extends Controller {
    static targets = [ "select", "link", "billingContacts", "billingPlan", "billingPrice"]
    static values = {maxContacts: Number, pricing: Array}
    connect() {

        if(this.hasBillingPriceTarget){
            this.singleLabelUpdatePrice()
        }
        else{
            this.updateFeaturePlansPricing(this.maxContactsValue);
        }
    }

    changeMaxContacts(e){
 
        var selectedCount = parseInt(this.selectTarget.value);
        this.updateFeaturePlansPricing(selectedCount)
        this.updateUpgradeLinksWithContacts(selectedCount);

    }

    updateFeaturePlansPricing(count){
        this.pricingValue.forEach(function(val, index){
            // console.log("value:", val)
            var price = (Number(val.contacts_pricing[count]).toLocaleString());
            // console.log("price:", price)
            Array.from(document.getElementsByClassName(`${val.name}-pricing`)).forEach(function(mo, index){
                mo.innerHTML = price;
            });
        });

        $(".compare-table__header").attr("data-contact-size", `${Number(count).toLocaleString()} contacts`)
    }

    updateUpgradeLinksWithContacts(count){
        this.linkTargets.forEach(function(target, index){
            var url = new URL(target.href);
            url.searchParams.set('contacts', count);
            target.href = url.href;
            
        })
    }

    singleLabelUpdatePrice(){
       
        var self = this;
        this.pricingValue.forEach(function(val, index){
            if(val.name.toLowerCase() == self.billingPlanTarget.value){
                var price = (Number(val.contacts_pricing[self.billingContactsTarget.value]).toLocaleString());
                self.billingPriceTarget.innerHTML = `$${price}`;
            }
        });


    }

}