package com.bitgo.eos.controller;

import com.bitgo.eos.response.*;
import com.bitgo.eos.service.*;

import java.util.Map;

import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

@RestController
public class TrxTokenController {

    @Autowired
    TRXTokenService trxTokenService;

    @RequestMapping(value = "trx/token/api/getBalance", method = RequestMethod.GET, produces = "application/json")
    public  Map<String, Object> getAccountDetail() {
        return trxTokenService.getAccountBalance();
    }

}
