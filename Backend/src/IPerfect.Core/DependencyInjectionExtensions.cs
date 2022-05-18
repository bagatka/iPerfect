using Microsoft.Extensions.DependencyInjection;

namespace Bagatka.IPerfect.Core;

public static class DependencyInjectionExtensions
{
    public static IServiceCollection AddIPerfectCore(this IServiceCollection services)
    {
        ArgumentNullException.ThrowIfNull(services, nameof(services));
        
        services
            .AddSingleton<IHttpContextAccessor, HttpContextAccessor>()
    }
}