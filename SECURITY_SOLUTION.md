# 🔒 Security Solution: Serverless Proxy for API Key Protection

## 🚨 Security Issue Identified

The original `GraphQLClient` implementation had a critical security vulnerability where API keys and authorization tokens were exposed directly in client-side code. This means:

- **API keys visible in browser dev tools**
- **Credentials exposed in network requests**
- **Keys could be extracted and misused**
- **No way to rotate keys without client updates**

## ✅ Solution: Serverless Proxy Architecture

We've implemented a **secure proxy pattern** that keeps all sensitive credentials server-side while maintaining the same client API.

### Architecture Overview

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────────┐
│   Client App    │───▶│  Serverless      │───▶│  External GraphQL   │
│   (React/Vue/   │    │  Proxy Function  │    │  API                │
│   Angular/etc)  │    │                  │    │                     │
└─────────────────┘    └──────────────────┘    └─────────────────────┘
        │                       │                       │
        │                       │                       │
   No API keys           API keys stored         API keys used
   exposed here          as env variables       securely here
```

## 🔧 Implementation Details

### 1. Updated GraphQLClient

The client now supports two security modes:

```typescript
// SECURE MODE (Recommended for production)
initializeClient({
  endpoint: 'https://your-proxy.vercel.app/api/graphql-proxy',
  securityMode: 'proxy',
  clientId: 'your-app-identifier', // Optional
  timeout: 30000
});

// INSECURE MODE (Only for development/testing)
initializeClient({
  endpoint: 'https://external-api.com/graphql',
  securityMode: 'direct',
  apiKey: 'your-api-key', // ⚠️ EXPOSED IN CLIENT CODE
  orderEditorApiKey: 'your-order-editor-key'
});
```

### 2. Serverless Proxy Function

A lightweight serverless function that:
- Receives GraphQL requests from clients
- Adds appropriate API keys server-side
- Forwards requests to external GraphQL API
- Returns responses to clients
- Handles CORS and authentication

## 🚀 Deployment Options

### Vercel (Recommended - Free Tier)
- **Pros:** Free tier, easy deployment, global CDN
- **Cons:** Limited execution time (10s free, 60s pro)
- **Best for:** Small to medium applications

### Netlify Functions
- **Pros:** Free tier, Git integration, easy setup
- **Cons:** Limited execution time (10s free)
- **Best for:** Static sites with API needs

### AWS Lambda
- **Pros:** Unlimited execution time, pay-per-use, enterprise features
- **Cons:** More complex setup, potential costs
- **Best for:** Large applications, enterprise use

### Other Platforms
- Google Cloud Functions
- Azure Functions
- DigitalOcean App Platform

## 📋 Setup Steps

### Step 1: Deploy Proxy Function

1. Choose your serverless platform
2. Deploy the proxy function from `serverless-proxy/` directory
3. Set environment variables:
   ```bash
   EXTERNAL_GRAPHQL_ENDPOINT=https://your-external-api.com/graphql
   API_KEY=your-standard-api-key
   ORDER_EDITOR_API_KEY=your-order-editor-api-key
   ALLOWED_ORIGINS=https://yourdomain.com
   ```

### Step 2: Update Client Configuration

```typescript
import { initializeClient } from '@your-package/graphql-client';

// Replace direct API calls with proxy calls
initializeClient({
  endpoint: 'https://your-proxy.vercel.app/api/graphql-proxy',
  securityMode: 'proxy',
  clientId: 'your-app-identifier',
  timeout: 30000
});
```

### Step 3: Test and Monitor

1. Test with simple queries
2. Monitor function logs
3. Set up alerts for errors
4. Monitor costs (if applicable)

## 🔒 Security Benefits

### What's Protected
- ✅ API keys never leave the server
- ✅ Authorization tokens stay server-side
- ✅ Credentials can't be extracted from client code
- ✅ Keys can be rotated without client updates
- ✅ Centralized access control

### Additional Security Features
- CORS protection
- Client identification (optional)
- Request validation
- Error handling without exposing internals
- Rate limiting capabilities

## 📊 Performance Considerations

### Latency Impact
- **Direct API:** ~50-200ms
- **Proxy + API:** ~100-400ms
- **Net Impact:** +50-200ms (acceptable for most use cases)

### Mitigation Strategies
1. **Global CDN:** Deploy proxy close to users
2. **Connection Pooling:** Reuse HTTP connections
3. **Caching:** Implement response caching for queries
4. **Optimization:** Minimize proxy processing overhead

## 🚨 Migration Guide

### From Direct Mode to Proxy Mode

1. **Deploy proxy function**
2. **Update client configuration:**
   ```typescript
   // OLD (INSECURE)
   initializeClient({
     endpoint: 'https://external-api.com/graphql',
     apiKey: 'your-api-key', // ⚠️ EXPOSED
     orderEditorApiKey: 'your-order-editor-key'
   });

   // NEW (SECURE)
   initializeClient({
     endpoint: 'https://your-proxy.vercel.app/api/graphql-proxy',
     securityMode: 'proxy',
     clientId: 'your-app-identifier'
   });
   ```

3. **Test thoroughly**
4. **Remove old configuration**
5. **Monitor for any issues**

### Rollback Plan

If issues arise, you can temporarily revert to direct mode:

```typescript
initializeClient({
  endpoint: 'https://external-api.com/graphql',
  securityMode: 'direct',
  apiKey: 'your-api-key',
  orderEditorApiKey: 'your-order-editor-key'
});
```

## 🔍 Monitoring & Debugging

### Key Metrics to Monitor
- Function execution time
- Error rates
- Request volume
- Cost (if applicable)
- API response times

### Debugging Tools
- Function logs
- Network tab in browser dev tools
- Health check endpoints
- Error tracking services

## 🚀 Advanced Features

### Rate Limiting
```typescript
// In proxy function
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/graphql-proxy', limiter);
```

### Request Logging
```typescript
// Log all requests for monitoring
console.log(`[${new Date().toISOString()}] ${req.method} ${req.path} - Client: ${clientId}`);
```

### Analytics
```typescript
// Track usage patterns
const analytics = {
  operation: actualOperationName,
  clientId: clientId,
  timestamp: new Date().toISOString(),
  userAgent: req.headers['user-agent']
};
```

## 📚 Best Practices

### Security
1. **Never commit API keys to version control**
2. **Use environment variables for all secrets**
3. **Restrict CORS origins in production**
4. **Implement rate limiting**
5. **Monitor for unusual activity**

### Performance
1. **Deploy proxy close to users**
2. **Use connection pooling**
3. **Implement caching where appropriate**
4. **Monitor and optimize function performance**

### Maintenance
1. **Regular security audits**
2. **Keep dependencies updated**
3. **Monitor costs and usage**
4. **Plan for key rotation**

## 🆘 Troubleshooting

### Common Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| CORS errors | Origin not in ALLOWED_ORIGINS | Add domain to environment variable |
| Timeout errors | Function execution too slow | Increase timeout, optimize code |
| API key errors | Environment variables not set | Verify all required variables |
| Function not found | Incorrect deployment path | Check platform-specific setup |

### Support Resources
- Platform-specific documentation
- Function logs
- Network request inspection
- Health check endpoints

## 🔮 Future Enhancements

### Planned Features
- **Authentication middleware** for client apps
- **Request/response caching** for improved performance
- **Advanced rate limiting** with per-client quotas
- **Metrics dashboard** for monitoring
- **Automatic scaling** based on demand

### Integration Options
- **Webhook support** for real-time updates
- **GraphQL subscriptions** through WebSocket proxy
- **Batch request support** for multiple operations
- **File upload handling** for media operations

---

## 📞 Need Help?

If you encounter issues or need assistance:

1. Check the [deployment guide](serverless-proxy/README.md)
2. Review function logs for error details
3. Verify environment variable configuration
4. Test with the health check endpoint
5. Check platform-specific documentation

**Remember:** Security is a journey, not a destination. Regular reviews and updates are essential for maintaining a secure system. 